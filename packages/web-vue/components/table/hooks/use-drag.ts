import { reactive } from 'vue';

export const useDrag = () => {
  const dragState = reactive({
    dragging: false,
    sourceKey: '',
    sourcePath: [] as number[],
    targetPath: [] as number[],
  });

  const clearDragState = () => {
    dragState.dragging = false;
    dragState.sourceKey = '';
    dragState.sourcePath = [];
    dragState.targetPath = [];
  };

  const handleDragStart = (
    ev: DragEvent,
    targetKey: string,
    targetPath: number[]
  ) => {
    if (ev.dataTransfer) {
      ev.dataTransfer.effectAllowed = 'move';
      if (ev.target && (ev.target as HTMLElement).tagName === 'TD') {
        const { parentElement } = ev.target as HTMLElement;
        if (parentElement && parentElement.tagName === 'TR') {
          ev.dataTransfer.setDragImage(parentElement, 0, 0);
        }
      }
    }
    dragState.dragging = true;
    dragState.sourceKey = targetKey;
    dragState.sourcePath = targetPath;
  };

  const handleDragEnter = (ev: DragEvent, sourcePath: number[]) => {
    if (ev.dataTransfer) {
      ev.dataTransfer.dropEffect = 'move';
    }
    dragState.targetPath = sourcePath;
    ev.preventDefault();
  };

  const handleDragLeave = (ev: DragEvent) => {};

  const handleDragover = (ev: DragEvent) => {
    if (ev.dataTransfer) {
      ev.dataTransfer.dropEffect = 'move';
    }
    ev.preventDefault();
  };

  const handleDragEnd = (ev: DragEvent) => {
    if (ev.dataTransfer?.dropEffect === 'none') {
      clearDragState();
    }
  };

  const handleDrop = (ev: DragEvent) => {
    clearDragState();
    ev.preventDefault();
  };

  return {
    dragState,
    handleDragStart,
    handleDragEnter,
    handleDragLeave,
    handleDragover,
    handleDragEnd,
    handleDrop,
  };
};
