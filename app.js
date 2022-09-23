
class IPSettings {
    pointsPerBits = 3;
    pointsPerDollar = 3;
    perBits = 100;
    perDollar = 1;
    includeGifts = false;
    includeResubs = false;
    pointsPerSub = 10;
    pointsPerSubT2 = 20;
    pointsPerSubT3 = 30;
    fontSize = 72;
    fontWeight = 'Normal';
    fontColor = '#ffffff';
    slToken = '';

    static storageKey = 'ZK.IncentivePoints.Settings';

    get properties() {
        return [
            'pointsPerBits',
            'perBits',
            'pointsPerDollar',
            'perDollar',
            'includeGifts',
            'includeResubs',
            'pointsPerSub',
            'pointsPerSubT2',
            'pointsPerSubT3',
            'fontSize',
            'fontWeight',
            'fontColor',
            'slToken',
        ];
    }

    constructor() {
        this.load();
        this.bind();
    }

    load() {
        console.log('loading settings');
        const storedString = localStorage.getItem(IPSettings.storageKey);
        if(storedString) {
            const storedObj = JSON.parse(storedString);
            Object.assign(this, storedObj);
        }
        this.properties.forEach( (id) => {
            const e = document.getElementById(id);
            if(e) {
                console.log(`Seeding value for ${id}`);
                switch(e.getAttribute('type')) {
                    case 'checkbox':
                        e.checked = this[id];
                        break;
                    default:
                        e.value = this[id];
                }
            }
        });
    }

    save() {
        localStorage.setItem(IPSettings.storageKey, JSON.stringify(this));
        console.log(JSON.stringify(this));
    }

    bind() {
        this.properties.forEach( (id) => {
            const e = document.getElementById(id);
            if(e) {
                e.addEventListener('change', (event) => {
                    console.log('change', e);
                    switch(e.getAttribute('type')) {
                        case 'number':
                            this[id] = Number.parseInt(event.target.value);
                            break;
                        case 'checkbox':
                            this[id] = event.target.checked;
                            break;
                        case 'select-one':
                            this[id] = event.target.value;
                        default:
                            this[id] = event.target.value;
                            break;
                    }
                });
            }
        });
        const submit = document.getElementById('saveSetBtn');
        if(submit) {
            submit.addEventListener('click', (event) => {
                settings.save();
                event.preventDefault();
            });
        }
        const points = document.getElementById('points');
        if(points) {
            points.style.fontSize = `${this.fontSize}px`;
            points.style.fontWeight = this.fontWeight;
            points.style.color = this.fontColor;
        }
    }
}

class PointsManager {
    points;
    #settings;

    static storageKey = 'ZK.IncentivePoints.Points';

    constructor(settings) {
        this.#settings = settings;
        this.load();
        this.bind();
        this.update();
    }

    bind() {
        const btn = document.getElementById('setPointsBtn');
        if(btn) {
            const setPoints = document.getElementById('setPoints');
            btn.addEventListener('click', (event) => {
                if(setPoints) {
                    this.set(Number.parseInt(setPoints.value));
                }
                event.preventDefault();
            });
            if(setPoints) {
                setPoints.value = this.points;
            }
        }
    }

    update() {
        const e = document.getElementById('points');
        if(e) {
            e.innerText = this.points;
        }
    }

    set(newPoints) {
        this.points = newPoints;
        this.save();
        this.update();
    }

    save() {
        localStorage.setItem(PointsManager.storageKey, this.points);
    }

    load() {
        this.points = Number.parseInt(localStorage.getItem(PointsManager.storageKey) || 0);
    }

    clear() {
        this.points = 0;
        this.save();
        this.update();
    }

    addPoints(newPoints) {
        if(!isNaN(newPoints)) {
            this.points += newPoints;
            console.log("Points are now", this.points);
            this.save();
            this.update();
        } else {
            console.error("Not adding NaN points");
        }
    }

    addBits(newBits) {
        console.log('Adding bits', newBits);
        this.addPoints(newBits * this.#settings.pointsPerBits / this.#settings.perBits);
    }
    
    addDono(newDono) {
        console.log('Adding dono', newDono);
        this.addPoints(newDono * this.#settings.pointsPerDollar / this.#settings.perDollar );
    }

    addSub(tier, months, resub) {
        if(!resub || (resub && this.#settings.includeResubs)) {
            switch(tier) {
                case 2:
                    this.addPoints(months * this.#settings.pointsPerSubT2);
                    break;
                case 3:
                    this.addPoints(months * this.#settings.pointsPerSubT3);
                    break;
                case 1:
                default:
                    this.addPoints(months * this.#settings.pointsPerSub);
                    break;
            }
        }
    }
}

class SLEventWatcher {
    #socket;
    #pointsManager;

    constructor(token, pointsManager) {
        this.#pointsManager = pointsManager;
        this.#socket = io(`https://sockets.streamlabs.com?token=${token}`, {transports: ['websocket']});

        this.#socket.on('event', (eventData) => {
            switch(eventData.for) {
                case 'twitch_account':
                    this.handleTwitchEvent(eventData);
                    break;
                case 'streamlabs':
                    this.handleStreamlabsEvent(eventData);
                    break;
                default:
                    console.log('unknown event', eventData);
            }
        });
    }

    handleStreamlabsEvent = (eventData) => {
        console.log('sl event', eventData);
        switch(eventData.type) {
            case 'donation':
                eventData.message.forEach( dono => {
                    this.#pointsManager.addDono(dono.amount);
                });
                break;
        }
    }

    handleTwitchEvent = (eventData) => {
        console.log('twitch event', eventData);
        switch(eventData.type) {
            case 'bits':
                eventData.message.forEach( bit => {
                    this.#pointsManager.addBits(Number(bit.amount));
                });
                break;
            case 'subscription':
                eventData.message.forEach( sub => {
                    // subs are probably 1k, 2k, 3k based on https://dev.twitch.tv/docs/eventsub/eventsub-reference#events
                    let plan = sub.sub_plan;
                    if(plan === "prime") {
                        plan = "1000";
                    }
                    this.#pointsManager.addSub(Number(sub.sub_plan)/1000, sub.months, false);
                });
                break;
            case 'resub':
                eventData.message.forEach( resub => {
                    let plan = resub.sub_plan;
                    if(plan === "prime") {
                        plan = "1000";
                    }
                    this.#pointsManager.addSub(Number(resub.sub_plan)/1000, 1, true);
                });
                break;
        }
    }
}