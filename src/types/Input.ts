interface Input {
    value?: string | number | boolean,
    label?: string,
    type?: string,
    placeholder?: string | number,
    outlined?: boolean,
    rules?: { (v: string | number | boolean): boolean; }[],
    required?: boolean,
    others?: Record<string, unknown>,
    solo?: boolean, 
    clearable?: boolean,
    suffix?: string,
    options?: string[],
    error?: boolean,
    errorMessage?: string
}

export default Input