import globals from "./global-variables";
import stylesConfig from "../styles.config";

const buttonBackgroundColors = {
    previous: {
        default: stylesConfig.colors.advisorBackgroundVariants.default,
        hover: stylesConfig.colors.primary.spectrum100,
        active: stylesConfig.colors.advisorBackgroundVariants.default,
    },
    next: {
        default: stylesConfig.colors.primaryAccentColorVariants.default,
        hover: stylesConfig.colors.primary.spectrum500,
        active: stylesConfig.colors.primary.spectrum500,
    },
    startOver: {
        default: stylesConfig.colors.secondary.spectrum100,
        hover: stylesConfig.colors.secondary.spectrum200,
        active: stylesConfig.colors.secondary.spectrum200,
    }
};

const previousButtonTextColor = stylesConfig.colors.primaryAccentColorVariants.default;
const nextButtonTextColor = stylesConfig.colors.secondaryFontColor;
const nextButtonBorderColor = stylesConfig.colors.primaryAccentColorVariants.default;
const previousButtonBorderColor = stylesConfig.colors.primaryAccentColorVariants.default;

const paginationButtonBackgroundColors = {
    hover: globals.colors.gray,
    active: globals.colors.gray
};

const paginationButtonBorderColor = stylesConfig.colors.advisorBackgroundVariants.dark;
const paginationSelectedButtonBorderColor = stylesConfig.colors.primaryAccentColorVariants.default;
const paginationSelectedButtonBackgroundColors = {
    default: stylesConfig.colors.primaryAccentColorVariants.default, // TODO ADJUST
    hover: stylesConfig.colors.primaryAccentColorVariants.default, // TODO ADJUST
    active: stylesConfig.colors.primaryAccentColorVariants.default // TODO ADJUST
};

const buttonFontSize = stylesConfig.typography.fontSize(0.9);
const startOverButtonFontSize = stylesConfig.typography.fontSize(0.9);
const startOverButtonTextColor = stylesConfig.colors.primaryFontColor;

const outlineFocusColor = stylesConfig.colors.primary.spectrum400;
const outlineFocusSecondaryColor = stylesConfig.colors.secondary.spectrum400;

export const ButtonReset = {
    display: "inline-block",
    padding: 0,
    margin: 0,
    background: "transparent",
    border: 0,
    cursor: "pointer",
    fontFamily: "inherit"
};

export const Button = {
    ...ButtonReset,
    "position": "relative",
    "padding": ["11px", "10px"],
    "minWidth": "135px",
    "backgroundColor": "white",
    "border": (configuration) => `1px solid ${previousButtonBorderColor(configuration)}`,
    "fontSize": buttonFontSize,
    "color": previousButtonTextColor,
    "fontWeight": "500",
    "textTransform": "uppercase",
    "transition": "background .3s ease",
    "&:hover": {
        background: buttonBackgroundColors.previous.hover,
    },
    "&:active": {
        background: buttonBackgroundColors.previous.active,
    },
    "&:focus": {
        outlineColor: outlineFocusSecondaryColor,
    },
};

export const ButtonRed = {
    ...Button,
    "background": buttonBackgroundColors.next.default,
    "border": (configuration) => `1px solid ${nextButtonBorderColor(configuration)}`,
    "color": nextButtonTextColor,
    "&:hover": {
        background: buttonBackgroundColors.next.hover,
    },
    "&:active": {
        background: buttonBackgroundColors.next.active,
    }
};

export const ButtonPagination = {
    ...ButtonReset,
    "minWidth": "30px",
    "minHeight": "30px",
    "padding": ["8px", 0],
    "border": (configuration) => `1px solid ${paginationButtonBorderColor(configuration)}`,
    "marginRight": "10px",
    "transition": "background .3s ease, border .3s ease",
    "&:last-child": {
        marginRight: 0,
    },
    "&:hover": {
        background: paginationButtonBackgroundColors.hover,
    },
    "&:active": {
        background: paginationButtonBackgroundColors.active,
    }
};
export const ButtonPaginationSelected = {
        ...ButtonPagination,
        "background": paginationSelectedButtonBackgroundColors.default,
        "color": "#fff",
        "border": (configuration) => `1px solid ${paginationSelectedButtonBorderColor(configuration)}`,
        "&:hover": {
            background: paginationSelectedButtonBackgroundColors.hover,
        },
        "&:active": {
            background: paginationSelectedButtonBackgroundColors.active,
        }
    }
;

export const ButtonPaginationNextBack = {
    paddingLeft: "10px",
    paddingRight: "10px",
    fontWeight: 600,
};

export const ButtonStartOver = {
    ...ButtonReset,
    "fontSize": startOverButtonFontSize,
    "color": startOverButtonTextColor,
    "display": "flex",
    "flexFlow": "wrap row",
    "alignItems": "center",
    "justifyContent": "center",
    "textTransform": "uppercase",
    "background": buttonBackgroundColors.startOver.default,
    "padding": ["12px", "20px"],
    "minWidth": "135px",
    "transition": "background .3s ease, border .3s ease",
    "&:hover": {
        background: buttonBackgroundColors.startOver.hover,
    },
    "&:active": {
        background: buttonBackgroundColors.startOver.active,
    },
    "&:focus": {
        outlineColor: outlineFocusColor,
    },
};
