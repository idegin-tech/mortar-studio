import * as z from 'zod';
import knownCssProperties from 'known-css-properties';

const cssProperties = knownCssProperties.all;

export const CssPropertiesSchema = z.object(
    cssProperties.reduce((acc, prop) => {
        acc[prop] = z.string().optional();
        return acc;
    }, {} as Record<string, z.ZodString | z.ZodOptional<z.ZodString>>)
);

export const CreateMortarStyleSchema = z.object({
    light: CssPropertiesSchema,
    dark: CssPropertiesSchema,
    hover: CssPropertiesSchema,
    focus: CssPropertiesSchema,
});

type CssProperties = {
    [K in (typeof knownCssProperties.all)[number]]?: string;
};

export type MortarStyle = {
    light: CssProperties;
    dark: CssProperties;
    hover: CssProperties;
    focus: CssProperties;
};
