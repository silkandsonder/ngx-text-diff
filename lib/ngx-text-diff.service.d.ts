import { diff_match_patch } from 'diff-match-patch';
import { DiffTableRowResult } from './ngx-text-diff.model';
import * as i0 from "@angular/core";
export declare class NgxTextDiffService {
    diffParser: diff_match_patch;
    constructor();
    private initParser;
    getDiffsByLines(left: string, right: string): Promise<DiffTableRowResult[]>;
    private formatOutput;
    private countDiffs;
    private getDiffParts;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxTextDiffService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxTextDiffService>;
}
