import Layer from "zeplin-extension-style-kit/elements/layer";
import { getUniqueLayerTextStyles } from "zeplin-extension-style-kit/utils";

var styles = require('./styles.json');

function layer(context, selectedLayer) {
    const l = new Layer(selectedLayer);
    const layerRuleSet = l.style;
    const childrenRuleSet = [];
    const { defaultTextStyle } = selectedLayer;

    if (selectedLayer.type === "text" && defaultTextStyle) {
        const declarations = l.getLayerTextStyleDeclarations(defaultTextStyle);

        declarations.forEach(p => layerRuleSet.addDeclaration(p));

        getUniqueLayerTextStyles(selectedLayer).filter(
            textStyle => !defaultTextStyle.equals(textStyle)
        ).forEach((textStyle, idx) => {
            childrenRuleSet.push(
                new RuleSet(
                    `${selectorize(selectedLayer.name)} ${selectorize(`text-style-${idx + 1}`)}`,
                    l.getLayerTextStyleDeclarations(textStyle)
                )
            );
        });
    }

    const styleSheetRules = styles ? styles.value : [];
    const layerRules = layerRuleSet.declarationMap;
    const layerProperties = Object.keys(layerRules);

    let cssClasses = [];

    styleSheetRules.forEach(function(rule) {
        let ruleMatches = true;

        for (let property in rule.declarations) {
            if (!layerProperties.includes(property)) {
                ruleMatches = false;
            } else {
                ruleMatches = styleSheetPropertyValueMatchesLayer(property, rule.declarations, layerRules);
            }
        }

        if (ruleMatches) {
            cssClasses = [...cssClasses, ...rule.selectors];
        }
    });

    return cssClasses.join(' ');
}

function styleSheetPropertyValueMatchesLayer(property, styleSheetRule, layerRules)
{
    if (!layerRules[property]) {
        return false;
    }

    const layerValue = layerRules[property];
    const styleSheetValue = styleSheetRule[property];

    switch (property) {
        case 'font-size':
            const layerString = layerValue.value.value + layerValue.value.unit;
            return layerString === styleSheetValue;
        case 'color':
            return colorsMatch(styleSheetValue, layerValue.value.object);
        case 'background-color':
            return colorsMatch(styleSheetValue, layerValue.color.object);
        default:
            return layerValue.value === styleSheetValue;
    }
}

function convertColorStringToArray(stylesheetColorString) {
    var newString = stylesheetColorString.slice(5, stylesheetColorString.length - 1);
    var array = newString.split(',');
    
    return array
}

function colorsMatch(styleSheetColor, layerColor) {
    let styleSheetColorArray = convertColorStringToArray(styleSheetColor);
    let colorMatches = true;
    let matches = true;

    if (layerColor.r.toString() !== styleSheetColorArray[0]) {
        matches = false;
    } else if (layerColor.g.toString() !== styleSheetColorArray[1]) {
        matches = false;
    } else if (layerColor.b.toString() !== styleSheetColorArray[2]) {
        matches = false;
    } else if (layerColor.a.toString() !== styleSheetColorArray[3]) {
        matches = false;
    }

    return matches;
}

export default {
    layer
};
