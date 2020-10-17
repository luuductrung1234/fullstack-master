const { tween, physics, styler, easing, value } = window.popmotion;

const WINDOW_INIT = 0;
const FETCH_DATA = 1;

function load(loadFor) {
    const circleStyler = styler(document.getElementById("tick-outline-path"));
    const tickStyler = styler(document.getElementById("tick-path"));
    const containerStyler = styler(document.querySelector(".container"));

    if (loadFor === WINDOW_INIT) {
        containerStyler.set({
            opacity: 0,
        });
    }

    function showTick() {
        // Complete outline
        tween({
            from: circleStyler.get("pathLength"),
            to: 1,
        }).start((v) => circleStyler.set("pathLength", v));

        tween().start((v) =>
            tickStyler.set({
                opacity: v,
                pathLength: v,
            })
        );

        containerStyler.set({
            opacity: 1,
        });
    }

    tween({ ease: easing.easeIn }).start({
        update: (v) =>
            circleStyler.set({
                opacity: v,
                pathLength: v * 0.45,
            }),
        complete: () =>
            physics({ velocity: -400 }).start((v) =>
                circleStyler.set("rotate", v)
            ),
    });

    // Emulate data received after delay
    setTimeout(showTick, 2000);
}

if (document.readyState === "loading") {
    load(WINDOW_INIT);
} else {
    document.addEventListener("DOMContentLoaded", load);
}

document.querySelector(".request-complement").addEventListener("click", () => {
    load(FETCH_DATA);
});
