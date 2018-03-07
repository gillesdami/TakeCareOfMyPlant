
/** 
 * Bind users click to obesrvables
*/
class UI {
    constructor(waterButton, feedButton, artificialLightToglelableButton, locationInput) {
        this._waterButton = waterButton;
        this._feedButton = feedButton;
        this._artificialLightToglelableButton = artificialLightToglelableButton;
        this._locationInput = locationInput;
    }

    getWaterObservable() {
        if(!this._waterObservable) {
            this._waterObservable = Rx.Observable.fromEvent(this._waterButton, 'click');
        }

        return this._waterObservable;
    }

    getFeedObservable() {
        if(!this._feedObservable) {
            this._feedObservable = Rx.Observable.fromEvent(this._feedButton, 'click');
        }

        return this._feedObservable;
    }

    getArtificialLightObservable() {
        if(!this._artificialLightObservable) {
            this._artificialLightObservable = Rx.Observable
                .fromEvent(this._artificialLightToglelableButton, 'click')
                .scan(boolean => !boolean, false);
        }

        return this._artificialLightObservable;
    }

    getLocationObservable() {
        if(!this._locationObservable) {
            this._locationObservable = Rx.Observable.fromEvent(this._locationInput, 'input')
                .debounceTime(500);
        }

        return this._locationObservable;
    }
}