import * as z from 'zod';
import { CssPropertiesSchema } from './styles.schema.js'


export const CreateMortarElementSchema = z.object({
    htmlTag: z.string(),
    parent_element_id: z.string().nullable(),
    attributes: z.object({}),
    style: CssPropertiesSchema,
    textContent: z.string().nullable(),
});

export type MortarElement = {
    id: string;
    index: number;
    parent_element_id: string | null;
    htmlTag: string;
    attributes: Record<string, string>;
    style: Record<string, any>;
    children: MortarElement[];
    textContent: string | null;
}
