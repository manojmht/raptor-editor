
// <expose>
$.extend(Raptor, {
    Button: Button,
    CSSClassApplierButton: CSSClassApplierButton,
    DialogButton: DialogButton,
    DialogToggleButton: DialogToggleButton,
    FilteredPreviewButton: FilteredPreviewButton,
    HoverPanelLayout: HoverPanelLayout,
    Menu: Menu,
    MenuButton: MenuButton,
    MessagesLayout: MessagesLayout,
    PreviewButton: PreviewButton,
    PreviewToggleButton: PreviewToggleButton,
    RaptorLayout: RaptorLayout,
    RaptorPlugin: RaptorPlugin,
    SelectMenu: SelectMenu,
    ToggleButton: ToggleButton,
    ToolbarLayout: ToolbarLayout,
    UiGroup: UiGroup,
    aButton: aButton,
    aButtonActive: aButtonActive,
    aButtonDisable: aButtonDisable,
    aButtonEnable: aButtonEnable,
    aButtonInactive: aButtonInactive,
    aButtonIsEnabled: aButtonIsEnabled,
    aButtonSetIcon: aButtonSetIcon,
    aButtonSetLabel: aButtonSetLabel,
    aDialog: aDialog,
    aDialogClose: aDialogClose,
    aDialogOpen: aDialogOpen,
    aMenu: aMenu,
    aTabs: aTabs,
    actionApply: actionApply,
    actionPreview: actionPreview,
    actionPreviewRestore: actionPreviewRestore,
    actionRedo: actionRedo,
    actionUndo: actionUndo,
    cleanEmptyAttributes: cleanEmptyAttributes,
    cleanEmptyElements: cleanEmptyElements,
    cleanRemoveComments: cleanRemoveComments,
    cleanReplaceElements: cleanReplaceElements,
    cleanUnnestElement: cleanUnnestElement,
    cleanUnwrapElements: cleanUnwrapElements,
    cleanWrapTextNodes: cleanWrapTextNodes,
    dockToElement: dockToElement,
    dockToScreen: dockToScreen,
    elementBringToTop: elementBringToTop,
    elementChangeTag: elementChangeTag,
    elementClosestBlock: elementClosestBlock,
    elementContainsBlockElement: elementContainsBlockElement,
    elementDefaultDisplay: elementDefaultDisplay,
    elementDetachedManip: elementDetachedManip,
    elementFirstInvalidElementOfValidParent: elementFirstInvalidElementOfValidParent,
    elementGetAttributes: elementGetAttributes,
    elementGetStyles: elementGetStyles,
    elementIsBlock: elementIsBlock,
    elementIsEmpty: elementIsEmpty,
    elementIsValid: elementIsValid,
    elementOuterHtml: elementOuterHtml,
    elementOuterText: elementOuterText,
    elementPositionUnder: elementPositionUnder,
    elementRemoveAttributes: elementRemoveAttributes,
    elementSwapStyles: elementSwapStyles,
    elementToggleStyle: elementToggleStyle,
    elementUniqueId: elementUniqueId,
    elementVisibleRect: elementVisibleRect,
    elementWrapInner: elementWrapInner,
    fragmentInsertBefore: fragmentInsertBefore,
    fragmentToHtml: fragmentToHtml,
    listBreakAtSelection: listBreakAtSelection,
    listBreakByReplacingSelection: listBreakByReplacingSelection,
    listConvertItemsForList: listConvertItemsForList,
    listConvertListItem: listConvertListItem,
    listConvertListType: listConvertListType,
    listEnforceValidChildren: listEnforceValidChildren,
    listRemoveEmpty: listRemoveEmpty,
    listRemoveEmptyItems: listRemoveEmptyItems,
    listShouldConvertType: listShouldConvertType,
    listShouldUnwrap: listShouldUnwrap,
    listShouldWrap: listShouldWrap,
    listTidyModified: listTidyModified,
    listToggle: listToggle,
    listUnwrap: listUnwrap,
    listUnwrapSelectedListItems: listUnwrapSelectedListItems,
    listUnwrapSelection: listUnwrapSelection,
    listWrapSelection: listWrapSelection,
    nodeFindParent: nodeFindParent,
    nodeFindTextNodes: nodeFindTextNodes,
    persistGet: persistGet,
    persistSet: persistSet,
    rangeContainsNode: rangeContainsNode,
    rangeContainsNodeText: rangeContainsNodeText,
    rangeDeserialize: rangeDeserialize,
    rangeEmptyTag: rangeEmptyTag,
    rangeExpandTo: rangeExpandTo,
    rangeExpandToParent: rangeExpandToParent,
    rangeGetCommonAncestor: rangeGetCommonAncestor,
    rangeGetEndElement: rangeGetEndElement,
    rangeGetStartElement: rangeGetStartElement,
    rangeIsContainedBy: rangeIsContainedBy,
    rangeIsEmpty: rangeIsEmpty,
    rangeReplace: rangeReplace,
    rangeReplaceSplitInvalidTags: rangeReplaceSplitInvalidTags,
    rangeReplaceWithinValidTags: rangeReplaceWithinValidTags,
    rangeSelectElement: rangeSelectElement,
    rangeSelectElementContent: rangeSelectElementContent,
    rangeSerialize: rangeSerialize,
    rangeTrim: rangeTrim,
    selectionAtEndOfElement: selectionAtEndOfElement,
    selectionAtStartOfElement: selectionAtStartOfElement,
    selectionChangeTags: selectionChangeTags,
    selectionClearFormatting: selectionClearFormatting,
    selectionConstrain: selectionConstrain,
    selectionContains: selectionContains,
    selectionDelete: selectionDelete,
    selectionDestroy: selectionDestroy,
    selectionEachBlock: selectionEachBlock,
    selectionEachRange: selectionEachRange,
    selectionExists: selectionExists,
    selectionExpandTo: selectionExpandTo,
    selectionExpandToWord: selectionExpandToWord,
    selectionFindWrappingAndInnerElements: selectionFindWrappingAndInnerElements,
    selectionGetElement: selectionGetElement,
    selectionGetElements: selectionGetElements,
    selectionGetEndElement: selectionGetEndElement,
    selectionGetFirstRange: selectionGetFirstRange,
    selectionGetHtml: selectionGetHtml,
    selectionGetStartElement: selectionGetStartElement,
    selectionInverseWrapWithTagClass: selectionInverseWrapWithTagClass,
    selectionIsEmpty: selectionIsEmpty,
    selectionReplace: selectionReplace,
    selectionReplaceSplittingSelectedElement: selectionReplaceSplittingSelectedElement,
    selectionReplaceWithinValidTags: selectionReplaceWithinValidTags,
    selectionRestore: selectionRestore,
    selectionSave: selectionSave,
    selectionSaved: selectionSaved,
    selectionSelectEdge: selectionSelectEdge,
    selectionSelectEnd: selectionSelectEnd,
    selectionSelectInner: selectionSelectInner,
    selectionSelectInner: selectionSelectInner,
    selectionSelectOuter: selectionSelectOuter,
    selectionSelectStart: selectionSelectStart,
    selectionSelectToEndOfElement: selectionSelectToEndOfElement,
    selectionSet: selectionSet,
    selectionToggleBlockClasses: selectionToggleBlockClasses,
    selectionToggleBlockStyle: selectionToggleBlockStyle,
    selectionToggleWrapper: selectionToggleWrapper,
    selectionTrim: selectionTrim,
    selectionWrapTagWithAttribute: selectionWrapTagWithAttribute,
    stateRestore: stateRestore,
    stateSave: stateSave,
    stringCamelCaseConvert: stringCamelCaseConvert,
    stringHtmlStringIsEmpty: stringHtmlStringIsEmpty,
    stringStripTags: stringStripTags,
    styleRestoreState: styleRestoreState,
    styleSwapState: styleSwapState,
    styleSwapWithWrapper: styleSwapWithWrapper,
    tableCanMergeCells: tableCanMergeCells,
    tableCanSplitCells: tableCanSplitCells,
    tableCellsInRange: tableCellsInRange,
    tableCreate: tableCreate,
    tableDeleteColumn: tableDeleteColumn,
    tableDeleteRow: tableDeleteRow,
    tableGetCellByIndex: tableGetCellByIndex,
    tableGetCellIndex: tableGetCellIndex,
    tableInsertColumn: tableInsertColumn,
    tableInsertRow: tableInsertRow,
    tableMergeCells: tableMergeCells,
    tableSplitCells: tableSplitCells,
    tagCustomApplyToSelection: tagCustomApplyToSelection,
    tagCustomRemoveFromSelection: tagCustomRemoveFromSelection,
    templateConvertTokens: templateConvertTokens,
    templateGet: templateGet,
    templateGetVariables: templateGetVariables,
    typeIsArray: typeIsArray,
    typeIsElement: typeIsElement,
    typeIsNode: typeIsNode,
    typeIsNumber: typeIsNumber,
    typeIsRange: typeIsRange,
    typeIsSelection: typeIsSelection,
    typeIsString: typeIsString,
    typeIsTextNode: typeIsTextNode,
    undockFromElement: undockFromElement,
    undockFromScreen: undockFromScreen
});
window.Raptor = Raptor;
// </expose>
