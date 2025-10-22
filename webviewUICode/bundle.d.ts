declare module "@jridgewell/gen-mapping/src/set-array" {
    type Key = string | number | symbol;
    /**
     * SetArray acts like a `Set` (allowing only one occurrence of a string `key`), but provides the
     * index of the `key` in the backing array.
     *
     * This is designed to allow synchronizing a second array with the contents of the backing array,
     * like how in a sourcemap `sourcesContent[i]` is the source content associated with `source[i]`,
     * and there are never duplicates.
     */
    export class SetArray<T extends Key = Key> {
        private _indexes;
        array: readonly T[];
        constructor();
    }
    /**
     * Gets the index associated with `key` in the backing array, if it is already present.
     */
    export function get<T extends Key>(setarr: SetArray<T>, key: T): number | undefined;
    /**
     * Puts `key` into the backing array, if it is not already present. Returns
     * the index of the `key` in the backing array.
     */
    export function put<T extends Key>(setarr: SetArray<T>, key: T): number;
    /**
     * Pops the last added item out of the SetArray.
     */
    export function pop<T extends Key>(setarr: SetArray<T>): void;
    /**
     * Removes the key, if it exists in the set.
     */
    export function remove<T extends Key>(setarr: SetArray<T>, key: T): void;
}
declare module "@jridgewell/gen-mapping/src/sourcemap-segment" {
    type GeneratedColumn = number;
    type SourcesIndex = number;
    type SourceLine = number;
    type SourceColumn = number;
    type NamesIndex = number;
    export type SourceMapSegment = [GeneratedColumn] | [GeneratedColumn, SourcesIndex, SourceLine, SourceColumn] | [GeneratedColumn, SourcesIndex, SourceLine, SourceColumn, NamesIndex];
    export const COLUMN = 0;
    export const SOURCES_INDEX = 1;
    export const SOURCE_LINE = 2;
    export const SOURCE_COLUMN = 3;
    export const NAMES_INDEX = 4;
}
declare module "@jridgewell/gen-mapping/src/types" {
    import type { SourceMapSegment } from "@jridgewell/gen-mapping/src/sourcemap-segment";
    export interface SourceMapV3 {
        file?: string | null;
        names: readonly string[];
        sourceRoot?: string;
        sources: readonly (string | null)[];
        sourcesContent?: readonly (string | null)[];
        version: 3;
        ignoreList?: readonly number[];
    }
    export interface EncodedSourceMap extends SourceMapV3 {
        mappings: string;
    }
    export interface DecodedSourceMap extends SourceMapV3 {
        mappings: readonly SourceMapSegment[][];
    }
    export interface Pos {
        line: number;
        column: number;
    }
    export interface OriginalPos extends Pos {
        source: string;
    }
    export interface BindingExpressionRange {
        start: Pos;
        expression: string;
    }
    export type Mapping = {
        generated: Pos;
        source: undefined;
        original: undefined;
        name: undefined;
    } | {
        generated: Pos;
        source: string;
        original: Pos;
        name: string;
    } | {
        generated: Pos;
        source: string;
        original: Pos;
        name: undefined;
    };
}
declare module "@jridgewell/gen-mapping/src/gen-mapping" {
    import type { SourceMapInput } from '@jridgewell/trace-mapping';
    import type { DecodedSourceMap, EncodedSourceMap, Pos, Mapping } from "@jridgewell/gen-mapping/src/types";
    export type { DecodedSourceMap, EncodedSourceMap, Mapping };
    export type Options = {
        file?: string | null;
        sourceRoot?: string | null;
    };
    /**
     * Provides the state to generate a sourcemap.
     */
    export class GenMapping {
        private _names;
        private _sources;
        private _sourcesContent;
        private _mappings;
        private _ignoreList;
        file: string | null | undefined;
        sourceRoot: string | null | undefined;
        constructor({ file, sourceRoot }?: Options);
    }
    /**
     * A low-level API to associate a generated position with an original source position. Line and
     * column here are 0-based, unlike `addMapping`.
     */
    export function addSegment(map: GenMapping, genLine: number, genColumn: number, source?: null, sourceLine?: null, sourceColumn?: null, name?: null, content?: null): void;
    export function addSegment(map: GenMapping, genLine: number, genColumn: number, source: string, sourceLine: number, sourceColumn: number, name?: null, content?: string | null): void;
    export function addSegment(map: GenMapping, genLine: number, genColumn: number, source: string, sourceLine: number, sourceColumn: number, name: string, content?: string | null): void;
    /**
     * A high-level API to associate a generated position with an original source position. Line is
     * 1-based, but column is 0-based, due to legacy behavior in `source-map` library.
     */
    export function addMapping(map: GenMapping, mapping: {
        generated: Pos;
        source?: null;
        original?: null;
        name?: null;
        content?: null;
    }): void;
    export function addMapping(map: GenMapping, mapping: {
        generated: Pos;
        source: string;
        original: Pos;
        name?: null;
        content?: string | null;
    }): void;
    export function addMapping(map: GenMapping, mapping: {
        generated: Pos;
        source: string;
        original: Pos;
        name: string;
        content?: string | null;
    }): void;
    /**
     * Same as `addSegment`, but will only add the segment if it generates useful information in the
     * resulting map. This only works correctly if segments are added **in order**, meaning you should
     * not add a segment with a lower generated line/column than one that came before.
     */
    export const maybeAddSegment: typeof addSegment;
    /**
     * Same as `addMapping`, but will only add the mapping if it generates useful information in the
     * resulting map. This only works correctly if mappings are added **in order**, meaning you should
     * not add a mapping with a lower generated line/column than one that came before.
     */
    export const maybeAddMapping: typeof addMapping;
    /**
     * Adds/removes the content of the source file to the source map.
     */
    export function setSourceContent(map: GenMapping, source: string, content: string | null): void;
    export function setIgnore(map: GenMapping, source: string, ignore?: boolean): void;
    /**
     * Returns a sourcemap object (with decoded mappings) suitable for passing to a library that expects
     * a sourcemap, or to JSON.stringify.
     */
    export function toDecodedMap(map: GenMapping): DecodedSourceMap;
    /**
     * Returns a sourcemap object (with encoded mappings) suitable for passing to a library that expects
     * a sourcemap, or to JSON.stringify.
     */
    export function toEncodedMap(map: GenMapping): EncodedSourceMap;
    /**
     * Constructs a new GenMapping, using the already present mappings of the input.
     */
    export function fromMap(input: SourceMapInput): GenMapping;
    /**
     * Returns an array of high-level mapping objects for every recorded segment, which could then be
     * passed to the `source-map` library.
     */
    export function allMappings(map: GenMapping): Mapping[];
}
declare module "@jridgewell/remapping/src/source-map-tree" {
    import { GenMapping } from '@jridgewell/gen-mapping';
    import type { TraceMap } from '@jridgewell/trace-mapping';
    export type SourceMapSegmentObject = {
        column: number;
        line: number;
        name: string;
        source: string;
        content: string | null;
        ignore: boolean;
    };
    export type OriginalSource = {
        map: null;
        sources: Sources[];
        source: string;
        content: string | null;
        ignore: boolean;
    };
    export type MapSource = {
        map: TraceMap;
        sources: Sources[];
        source: string;
        content: null;
        ignore: false;
    };
    export type Sources = OriginalSource | MapSource;
    /**
     * MapSource represents a single sourcemap, with the ability to trace mappings into its child nodes
     * (which may themselves be SourceMapTrees).
     */
    export function MapSource(map: TraceMap, sources: Sources[]): MapSource;
    /**
     * A "leaf" node in the sourcemap tree, representing an original, unmodified source file. Recursive
     * segment tracing ends at the `OriginalSource`.
     */
    export function OriginalSource(source: string, content: string | null, ignore: boolean): OriginalSource;
    /**
     * traceMappings is only called on the root level SourceMapTree, and begins the process of
     * resolving each mapping in terms of the original source files.
     */
    export function traceMappings(tree: MapSource): GenMapping;
    /**
     * originalPositionFor is only called on children SourceMapTrees. It recurses down into its own
     * child SourceMapTrees, until we find the original source map.
     */
    export function originalPositionFor(source: Sources, line: number, column: number, name: string): SourceMapSegmentObject | null;
}
declare module "@jridgewell/remapping/src/types" {
    import type { SourceMapInput } from '@jridgewell/trace-mapping';
    export type { SourceMapSegment, DecodedSourceMap, EncodedSourceMap, } from '@jridgewell/trace-mapping';
    export type { SourceMapInput };
    export type LoaderContext = {
        readonly importer: string;
        readonly depth: number;
        source: string;
        content: string | null | undefined;
        ignore: boolean | undefined;
    };
    export type SourceMapLoader = (file: string, ctx: LoaderContext) => SourceMapInput | null | undefined | void;
    export type Options = {
        excludeContent?: boolean;
        decodedMappings?: boolean;
    };
}
declare module "@jridgewell/remapping/src/build-source-map-tree" {
    import type { MapSource as MapSourceType } from "@jridgewell/remapping/src/source-map-tree";
    import type { SourceMapInput, SourceMapLoader } from "@jridgewell/remapping/src/types";
    /**
     * Recursively builds a tree structure out of sourcemap files, with each node
     * being either an `OriginalSource` "leaf" or a `SourceMapTree` composed of
     * `OriginalSource`s and `SourceMapTree`s.
     *
     * Every sourcemap is composed of a collection of source files and mappings
     * into locations of those source files. When we generate a `SourceMapTree` for
     * the sourcemap, we attempt to load each source file's own sourcemap. If it
     * does not have an associated sourcemap, it is considered an original,
     * unmodified source file.
     */
    export default function buildSourceMapTree(input: SourceMapInput | SourceMapInput[], loader: SourceMapLoader): MapSourceType;
}
declare module "@jridgewell/remapping/src/source-map" {
    import type { GenMapping } from '@jridgewell/gen-mapping';
    import type { DecodedSourceMap, EncodedSourceMap, Options } from "@jridgewell/remapping/src/types";
    /**
     * A SourceMap v3 compatible sourcemap, which only includes fields that were
     * provided to it.
     */
    export default class SourceMap {
        file?: string | null;
        mappings: EncodedSourceMap['mappings'] | DecodedSourceMap['mappings'];
        sourceRoot?: string;
        names: string[];
        sources: (string | null)[];
        sourcesContent?: (string | null)[];
        version: 3;
        ignoreList: number[] | undefined;
        constructor(map: GenMapping, options: Options);
        toString(): string;
    }
}
declare module "@jridgewell/remapping/src/remapping" {
    import SourceMap from "@jridgewell/remapping/src/source-map";
    import type { SourceMapInput, SourceMapLoader, Options } from "@jridgewell/remapping/src/types";
    export type { SourceMapSegment, EncodedSourceMap, EncodedSourceMap as RawSourceMap, DecodedSourceMap, SourceMapInput, SourceMapLoader, LoaderContext, Options, } from "@jridgewell/remapping/src/types";
    export type { SourceMap };
    /**
     * Traces through all the mappings in the root sourcemap, through the sources
     * (and their sourcemaps), all the way back to the original source location.
     *
     * `loader` will be called every time we encounter a source file. If it returns
     * a sourcemap, we will recurse into that sourcemap to continue the trace. If
     * it returns a falsey value, that source file is treated as an original,
     * unmodified source file.
     *
     * Pass `excludeContent` to exclude any self-containing source file content
     * from the output sourcemap.
     *
     * Pass `decodedMappings` to receive a SourceMap with decoded (instead of
     * VLQ encoded) mappings.
     */
    export default function remapping(input: SourceMapInput | SourceMapInput[], loader: SourceMapLoader, options?: boolean | Options): SourceMap;
}
declare module "@jridgewell/sourcemap-codec/src/strings" {
    export class StringWriter {
        pos: number;
        private out;
        private buffer;
        write(v: number): void;
        flush(): string;
    }
    export class StringReader {
        pos: number;
        private buffer;
        constructor(buffer: string);
        next(): number;
        peek(): number;
        indexOf(char: string): number;
    }
}
declare module "@jridgewell/sourcemap-codec/src/vlq" {
    import type { StringReader, StringWriter } from "@jridgewell/sourcemap-codec/src/strings";
    export const comma: number;
    export const semicolon: number;
    export function decodeInteger(reader: StringReader, relative: number): number;
    export function encodeInteger(builder: StringWriter, num: number, relative: number): number;
    export function hasMoreVlq(reader: StringReader, max: number): boolean;
}
declare module "@jridgewell/sourcemap-codec/src/scopes" {
    type Line = number;
    type Column = number;
    type Kind = number;
    type Name = number;
    type Var = number;
    type SourcesIndex = number;
    type ScopesIndex = number;
    type Mix<A, B, O> = (A & O) | (B & O);
    export type OriginalScope = Mix<[
        Line,
        Column,
        Line,
        Column,
        Kind
    ], [
        Line,
        Column,
        Line,
        Column,
        Kind,
        Name
    ], {
        vars: Var[];
    }>;
    export type GeneratedRange = Mix<[
        Line,
        Column,
        Line,
        Column
    ], [
        Line,
        Column,
        Line,
        Column,
        SourcesIndex,
        ScopesIndex
    ], {
        callsite: CallSite | null;
        bindings: Binding[];
        isScope: boolean;
    }>;
    export type CallSite = [SourcesIndex, Line, Column];
    type Binding = BindingExpressionRange[];
    export type BindingExpressionRange = [Name] | [Name, Line, Column];
    export function decodeOriginalScopes(input: string): OriginalScope[];
    export function encodeOriginalScopes(scopes: OriginalScope[]): string;
    export function decodeGeneratedRanges(input: string): GeneratedRange[];
    export function encodeGeneratedRanges(ranges: GeneratedRange[]): string;
}
declare module "@jridgewell/sourcemap-codec/src/sourcemap-codec" {
    export { decodeOriginalScopes, encodeOriginalScopes, decodeGeneratedRanges, encodeGeneratedRanges, } from "@jridgewell/sourcemap-codec/src/scopes";
    export type { OriginalScope, GeneratedRange, CallSite, BindingExpressionRange } from "@jridgewell/sourcemap-codec/src/scopes";
    export type SourceMapSegment = [number] | [number, number, number, number] | [number, number, number, number, number];
    export type SourceMapLine = SourceMapSegment[];
    export type SourceMapMappings = SourceMapLine[];
    export function decode(mappings: string): SourceMapMappings;
    export function encode(decoded: SourceMapMappings): string;
    export function encode(decoded: Readonly<SourceMapMappings>): string;
}
declare module "@jridgewell/trace-mapping/src/sourcemap-segment" {
    type GeneratedColumn = number;
    type SourcesIndex = number;
    type SourceLine = number;
    type SourceColumn = number;
    type NamesIndex = number;
    type GeneratedLine = number;
    export type SourceMapSegment = [GeneratedColumn] | [GeneratedColumn, SourcesIndex, SourceLine, SourceColumn] | [GeneratedColumn, SourcesIndex, SourceLine, SourceColumn, NamesIndex];
    export type ReverseSegment = [SourceColumn, GeneratedLine, GeneratedColumn];
    export const COLUMN = 0;
    export const SOURCES_INDEX = 1;
    export const SOURCE_LINE = 2;
    export const SOURCE_COLUMN = 3;
    export const NAMES_INDEX = 4;
    export const REV_GENERATED_LINE = 1;
    export const REV_GENERATED_COLUMN = 2;
}
declare module "@jridgewell/trace-mapping/src/binary-search" {
    import type { SourceMapSegment, ReverseSegment } from "@jridgewell/trace-mapping/src/sourcemap-segment";
    export type MemoState = {
        lastKey: number;
        lastNeedle: number;
        lastIndex: number;
    };
    export let found: boolean;
    /**
     * A binary search implementation that returns the index if a match is found.
     * If no match is found, then the left-index (the index associated with the item that comes just
     * before the desired index) is returned. To maintain proper sort order, a splice would happen at
     * the next index:
     *
     * ```js
     * const array = [1, 3];
     * const needle = 2;
     * const index = binarySearch(array, needle, (item, needle) => item - needle);
     *
     * assert.equal(index, 0);
     * array.splice(index + 1, 0, needle);
     * assert.deepEqual(array, [1, 2, 3]);
     * ```
     */
    export function binarySearch(haystack: SourceMapSegment[] | ReverseSegment[], needle: number, low: number, high: number): number;
    export function upperBound(haystack: SourceMapSegment[] | ReverseSegment[], needle: number, index: number): number;
    export function lowerBound(haystack: SourceMapSegment[] | ReverseSegment[], needle: number, index: number): number;
    export function memoizedState(): MemoState;
    /**
     * This overly complicated beast is just to record the last tested line/column and the resulting
     * index, allowing us to skip a few tests if mappings are monotonically increasing.
     */
    export function memoizedBinarySearch(haystack: SourceMapSegment[] | ReverseSegment[], needle: number, state: MemoState, key: number): number;
}
declare module "@jridgewell/trace-mapping/src/by-source" {
    import type { ReverseSegment, SourceMapSegment } from "@jridgewell/trace-mapping/src/sourcemap-segment";
    import type { MemoState } from "@jridgewell/trace-mapping/src/binary-search";
    export type Source = {
        __proto__: null;
        [line: number]: Exclude<ReverseSegment, [number]>[];
    };
    export default function buildBySources(decoded: readonly SourceMapSegment[][], memos: MemoState[]): Source[];
}
declare module "@jridgewell/trace-mapping/src/strip-filename" {
    /**
     * Removes everything after the last "/", but leaves the slash.
     */
    export default function stripFilename(path: string | undefined | null): string;
}
declare module "@jridgewell/trace-mapping/src/resolve" {
    type Resolve = (source: string | null) => string;
    export default function resolver(mapUrl: string | null | undefined, sourceRoot: string | undefined): Resolve;
}
declare module "@jridgewell/trace-mapping/src/sort" {
    import type { SourceMapSegment } from "@jridgewell/trace-mapping/src/sourcemap-segment";
    export default function maybeSort(mappings: SourceMapSegment[][], owned: boolean): SourceMapSegment[][];
}
declare module "@jridgewell/trace-mapping/src/types" {
    import type { SourceMapSegment } from "@jridgewell/trace-mapping/src/sourcemap-segment";
    import type { GREATEST_LOWER_BOUND, LEAST_UPPER_BOUND, TraceMap } from "@jridgewell/trace-mapping/src/trace-mapping";
    export interface SourceMapV3 {
        file?: string | null;
        names: string[];
        sourceRoot?: string;
        sources: (string | null)[];
        sourcesContent?: (string | null)[];
        version: 3;
        ignoreList?: number[];
    }
    export interface EncodedSourceMap extends SourceMapV3 {
        mappings: string;
    }
    export interface DecodedSourceMap extends SourceMapV3 {
        mappings: SourceMapSegment[][];
    }
    export interface Section {
        offset: {
            line: number;
            column: number;
        };
        map: EncodedSourceMap | DecodedSourceMap | SectionedSourceMap;
    }
    export interface SectionedSourceMap {
        file?: string | null;
        sections: Section[];
        version: 3;
    }
    export type OriginalMapping = {
        source: string | null;
        line: number;
        column: number;
        name: string | null;
    };
    export type InvalidOriginalMapping = {
        source: null;
        line: null;
        column: null;
        name: null;
    };
    export type GeneratedMapping = {
        line: number;
        column: number;
    };
    export type InvalidGeneratedMapping = {
        line: null;
        column: null;
    };
    export type Bias = typeof GREATEST_LOWER_BOUND | typeof LEAST_UPPER_BOUND;
    export type XInput = {
        x_google_ignoreList?: SourceMapV3['ignoreList'];
    };
    export type EncodedSourceMapXInput = EncodedSourceMap & XInput;
    export type DecodedSourceMapXInput = DecodedSourceMap & XInput;
    export type SectionedSourceMapXInput = Omit<SectionedSourceMap, 'sections'> & {
        sections: SectionXInput[];
    };
    export type SectionXInput = Omit<Section, 'map'> & {
        map: SectionedSourceMapInput;
    };
    export type SourceMapInput = string | EncodedSourceMapXInput | DecodedSourceMapXInput | TraceMap;
    export type SectionedSourceMapInput = SourceMapInput | SectionedSourceMapXInput;
    export type Needle = {
        line: number;
        column: number;
        bias?: Bias;
    };
    export type SourceNeedle = {
        source: string;
        line: number;
        column: number;
        bias?: Bias;
    };
    export type EachMapping = {
        generatedLine: number;
        generatedColumn: number;
        source: null;
        originalLine: null;
        originalColumn: null;
        name: null;
    } | {
        generatedLine: number;
        generatedColumn: number;
        source: string | null;
        originalLine: number;
        originalColumn: number;
        name: string | null;
    };
    export abstract class SourceMap {
        version: SourceMapV3['version'];
        file: SourceMapV3['file'];
        names: SourceMapV3['names'];
        sourceRoot: SourceMapV3['sourceRoot'];
        sources: SourceMapV3['sources'];
        sourcesContent: SourceMapV3['sourcesContent'];
        resolvedSources: SourceMapV3['sources'];
        ignoreList: SourceMapV3['ignoreList'];
    }
    export type Ro<T> = T extends Array<infer V> ? V[] | Readonly<V[]> | RoArray<V> | Readonly<RoArray<V>> : T extends object ? T | Readonly<T> | RoObject<T> | Readonly<RoObject<T>> : T;
    type RoArray<T> = Ro<T>[];
    type RoObject<T> = {
        [K in keyof T]: T[K] | Ro<T[K]>;
    };
    export function parse<T>(map: T): Exclude<T, string>;
}
declare module "@jridgewell/trace-mapping/src/trace-mapping" {
    import type { SourceMapSegment } from "@jridgewell/trace-mapping/src/sourcemap-segment";
    import type { SourceMapV3, DecodedSourceMap, EncodedSourceMap, InvalidOriginalMapping, OriginalMapping, InvalidGeneratedMapping, GeneratedMapping, SourceMapInput, Needle, SourceNeedle, SourceMap, EachMapping, Ro } from "@jridgewell/trace-mapping/src/types";
    export type { SourceMapSegment } from "@jridgewell/trace-mapping/src/sourcemap-segment";
    export type { SourceMap, DecodedSourceMap, EncodedSourceMap, Section, SectionedSourceMap, SourceMapV3, Bias, EachMapping, GeneratedMapping, InvalidGeneratedMapping, InvalidOriginalMapping, Needle, OriginalMapping, OriginalMapping as Mapping, SectionedSourceMapInput, SourceMapInput, SourceNeedle, XInput, EncodedSourceMapXInput, DecodedSourceMapXInput, SectionedSourceMapXInput, SectionXInput, } from "@jridgewell/trace-mapping/src/types";
    export const LEAST_UPPER_BOUND = -1;
    export const GREATEST_LOWER_BOUND = 1;
    export { FlattenMap, FlattenMap as AnyMap } from "@jridgewell/trace-mapping/src/flatten-map";
    export class TraceMap implements SourceMap {
        version: SourceMapV3['version'];
        file: SourceMapV3['file'];
        names: SourceMapV3['names'];
        sourceRoot: SourceMapV3['sourceRoot'];
        sources: SourceMapV3['sources'];
        sourcesContent: SourceMapV3['sourcesContent'];
        ignoreList: SourceMapV3['ignoreList'];
        resolvedSources: string[];
        private _encoded;
        private _decoded;
        private _decodedMemo;
        private _bySources;
        private _bySourceMemos;
        constructor(map: Ro<SourceMapInput>, mapUrl?: string | null);
    }
    /**
     * Returns the encoded (VLQ string) form of the SourceMap's mappings field.
     */
    export function encodedMappings(map: TraceMap): EncodedSourceMap['mappings'];
    /**
     * Returns the decoded (array of lines of segments) form of the SourceMap's mappings field.
     */
    export function decodedMappings(map: TraceMap): Readonly<DecodedSourceMap['mappings']>;
    /**
     * A low-level API to find the segment associated with a generated line/column (think, from a
     * stack trace). Line and column here are 0-based, unlike `originalPositionFor`.
     */
    export function traceSegment(map: TraceMap, line: number, column: number): Readonly<SourceMapSegment> | null;
    /**
     * A higher-level API to find the source/line/column associated with a generated line/column
     * (think, from a stack trace). Line is 1-based, but column is 0-based, due to legacy behavior in
     * `source-map` library.
     */
    export function originalPositionFor(map: TraceMap, needle: Needle): OriginalMapping | InvalidOriginalMapping;
    /**
     * Finds the generated line/column position of the provided source/line/column source position.
     */
    export function generatedPositionFor(map: TraceMap, needle: SourceNeedle): GeneratedMapping | InvalidGeneratedMapping;
    /**
     * Finds all generated line/column positions of the provided source/line/column source position.
     */
    export function allGeneratedPositionsFor(map: TraceMap, needle: SourceNeedle): GeneratedMapping[];
    /**
     * Iterates each mapping in generated position order.
     */
    export function eachMapping(map: TraceMap, cb: (mapping: EachMapping) => void): void;
    /**
     * Retrieves the source content for a particular source, if its found. Returns null if not.
     */
    export function sourceContentFor(map: TraceMap, source: string): string | null;
    /**
     * Determines if the source is marked to ignore by the source map.
     */
    export function isIgnored(map: TraceMap, source: string): boolean;
    /**
     * A helper that skips sorting of the input map's mappings array, which can be expensive for larger
     * maps.
     */
    export function presortedDecodedMap(map: DecodedSourceMap, mapUrl?: string): TraceMap;
    /**
     * Returns a sourcemap object (with decoded mappings) suitable for passing to a library that expects
     * a sourcemap, or to JSON.stringify.
     */
    export function decodedMap(map: TraceMap): Omit<DecodedSourceMap, 'mappings'> & {
        mappings: readonly SourceMapSegment[][];
    };
    /**
     * Returns a sourcemap object (with encoded mappings) suitable for passing to a library that expects
     * a sourcemap, or to JSON.stringify.
     */
    export function encodedMap(map: TraceMap): EncodedSourceMap;
}
declare module "@jridgewell/trace-mapping/src/flatten-map" {
    import { TraceMap } from "@jridgewell/trace-mapping/src/trace-mapping";
    import type { SectionedSourceMapInput, Ro } from "@jridgewell/trace-mapping/src/types";
    type FlattenMap = {
        new (map: Ro<SectionedSourceMapInput>, mapUrl?: string | null): TraceMap;
        (map: Ro<SectionedSourceMapInput>, mapUrl?: string | null): TraceMap;
    };
    export const FlattenMap: FlattenMap;
}
declare module "@jscad/modeling/src/index.test-d" { }
