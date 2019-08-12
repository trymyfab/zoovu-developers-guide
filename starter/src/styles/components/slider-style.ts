import stylesConfig from "../styles.config";

const sliderBackground = stylesConfig.colors.advisorBackgroundVariants.dark;
const sliderSelectedBackground = stylesConfig.colors.primaryAccentColorVariants.default;
export default {
    container: {
        "position": "relative",
        "userSelect": "none",
        "& .slider": {
            "position": "relative",
            "display": "block",
            "background": sliderBackground,
            "&::after": {
                content: "''",
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                zIndex: 2
            }
        },
        "& .slider-selected-range": {
            position: "absolute",
            display: "block",
            background: sliderSelectedBackground,
            zIndex: 1,
            transition: "background 0s"
        },
        "&.slider-horizontal .slider-selected-range": {
            width: 0,
            height: "100%",
            top: 0,
            left: 0,
            willChange: "width"
        },
        "& .slider-dot": {
            "position": "absolute",
            "borderRadius": "50%",
            "background": "#fff",
            "left": 0,
            "willChange": "transform",
            "boxShadow": "0.5px 0.5px 2px 1px rgba(0, 0, 0, 0.32)",
            "transition": "all 0s",
            "cursor": "pointer",
            "zIndex": 5,
            "&.slider-dot-focus": {
                boxShadow: (configuration) => `0 0 2px 1px ${sliderSelectedBackground(configuration)}`
            },
            "&.slider-dot-dragging": {
                zIndex: 5
            }
        },
        "&.slider-horizontal .slider-dot": {
            left: 0
        },
        "&.slider-vertical .slider-dot": {
            bottom: 0
        }
    }
};
