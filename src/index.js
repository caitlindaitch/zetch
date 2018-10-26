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
            cssClasses = [cssClasses, ...rule.selectors];
        }
    })

    return {
        code: cssClasses.join(' '),
        language: 'css'
    };
}

function styleSheetPropertyValueMatchesLayer(property, styleSheetRule, layerRules)
{
    switch (property) {
        case 'font-size':
            if (!layerRules[property] || !layerRules[property].value) {
                return false;
            }
            const layerString = layerRules[property].value.value + layerRules[property].value.unit;
            return layerString === styleSheetRule[property];
        default:
            return false;
    }
}

export default {
    layer
};
