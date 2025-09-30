export interface ESMModule {
    code: string;
    imports: string[];
    exports: string[];
    filePath?: string;
}

export interface WebviewMessage {
    type: 'execute' | 'result' | 'error' | 'log';
    data: any;
    moduleId?: string;
}

export interface ResolvedImport {
    specifier: string;
    resolvedCode: string;
    isExternal: boolean;
}