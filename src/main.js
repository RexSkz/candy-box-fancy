import * as PIXI from 'pixi.js';
import G from './global';

class CandyBoxFancy {
    constructor(opt) {
        if (!(opt && opt.el && opt.el.nodeName)) {
            console.error('Parameter el must be an html element'); // eslint-disable-line no-console
            return false;
        }
        if (!opt.el.querySelector('canvas')) {
            this.setupRender(opt.el);
        }
        // TODO: load the real game scene
    }
    setupRender(target) {
        G.renderer = PIXI.autoDetectRenderer(0, 0, {
            antialias: false,
            transparent: true,
            resolution: window.devicePixelRatio || 1
        });
        G.renderer.view.style.position = 'absolute';
        G.renderer.view.style.top = '50%';
        G.renderer.view.style.left = '50%';
        G.renderer.view.style.width = '640px';
        G.renderer.view.style.height = '480px';
        G.renderer.view.style.transform = 'translate(-50%, -50%)';
        G.renderer.resize(640, 480);
        target.appendChild(G.renderer.view);
    }
}

const candybox = new CandyBoxFancy({ el: document.getElementById('game-area') });
window.candybox = candybox;
