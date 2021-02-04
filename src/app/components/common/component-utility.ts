export class ComponentUtility {
    public isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
    }
}