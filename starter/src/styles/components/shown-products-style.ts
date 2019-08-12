import globals from "../partials/global-variables";

const propertyNameColor = globals.colors.gray;
const propertyGroupNameColor = globals.colors.gray;
const tableCellBorderColor = globals.colors.gray;

export default {
    container: {
        "height": "60vh",
        "overflow": "auto",
        "& .product-header": {
            "& .remove-button-container": {
                "position": "relative",
                "& .remove-icon": {
                    cursor: "pointer",
                    position: "absolute",
                    right: 0,
                    top: 0,
                    background: (configuration) => `${globals.customerSprite2(configuration)} no-repeat 0px -169px`,
                    width: "15px",
                    height: "15px"
                }
            }
        },
        "& .product-property-name": {
            background: propertyNameColor
        },
        "& .property-group-name": {
            background: propertyGroupNameColor,
            textAlign: "left"
        },
        "& .property-value span": {
            display: "inline-block",
            whiteSpace: "normal",
            overflow: "hidden",
            wordBreak: "break-word",
            overflowWrap: "break-word",
            width: "300px"
        },
        "& table": {
            overflow: "auto",
            borderCollapse: "collapse",
            borderSpacing: 0,
            tableLayout: "fixed",
            width: "auto"
        },
        "& th": {
            verticalAlign: "top",
            textAlign: "center",
            minWidth: "300px",
            maxWidth: "300px",
            padding: "8px",
            border: `1px solid ${tableCellBorderColor}`
        },
        "& td": {
            textAlign: "center",
            width: "200px",
            padding: "8px",
            border: `1px solid ${tableCellBorderColor}`
        },
        "& i": {
            display: "inline-block",
            width: "13px",
        },
        "& .boolean-true": {
            "& i": {
                left: "-3px",
                height: "19px",
                width: "19px",
                background: (configuration) => `${globals.customerSprite(configuration)} no-repeat 0 -77px`,
            }
        },
        "& .boolean-false": {
            "& i": {
                height: "19px",
                width: "19px",
                background: (configuration) => `${globals.customerSprite(configuration)} no-repeat -22px -77px`,
            }
        }
    }
};
