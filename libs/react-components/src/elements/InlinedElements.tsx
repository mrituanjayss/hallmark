import Stack from '@mui/material/Stack';

import type { ElementType, IMessageElement } from 'client-types/';

import { InlinedAudioList } from './InlinedAudioList';
import { InlinedEchartList } from './InlinedEchartList';
import { InlinedFileList } from './InlinedFileList';
import { InlinedImageList } from './InlinedImageList';
import { InlinedPDFList } from './InlinedPDFList';
import { InlinedPlotlyList } from './InlinedPlotlyList';
import { InlinedTextList } from './InlinedTextList';
import { InlinedVideoList } from './InlinedVideoList';

// Added By Jay 5/2/2024

interface Props {
  elements: IMessageElement[];
}

const InlinedElements = ({ elements }: Props) => {
  if (!elements.length) {
    return null;
  }

  /**
   * Categorize the elements by element type
   * The TypeScript dance is needed to make sure we can do elementsByType.image
   * and get an array of IImageElement.
   */
  const elementsByType = elements.reduce(
    (acc, el: IMessageElement) => {
      if (!acc[el.type]) {
        acc[el.type] = [];
      }
      const array = acc[el.type] as Extract<
        IMessageElement,
        { type: typeof el.type }
      >[];
      array.push(el);
      return acc;
    },
    {} as {
      [K in ElementType]: Extract<IMessageElement, { type: K }>[];
    }
  );

  return (
    <Stack gap={1} mt={1}>
      {elementsByType.image?.length ? (
        <InlinedImageList items={elementsByType.image} />
      ) : null}
      {elementsByType.text?.length ? (
        <InlinedTextList items={elementsByType.text} />
      ) : null}
      {elementsByType.pdf?.length ? (
        <InlinedPDFList items={elementsByType.pdf} />
      ) : null}
      {elementsByType.audio?.length ? (
        <InlinedAudioList items={elementsByType.audio} />
      ) : null}
      {elementsByType.video?.length ? (
        <InlinedVideoList items={elementsByType.video} />
      ) : null}
      {elementsByType.file?.length ? (
        <InlinedFileList items={elementsByType.file} />
      ) : null}
      {elementsByType.plotly?.length ? (
        <InlinedPlotlyList items={elementsByType.plotly} />
      ) : null}
      {elementsByType.echarts?.length ? ( // Added by Jay 24/1/2024
        <InlinedEchartList items={elementsByType.echarts} />
      ) : null}
    </Stack>
  );
};

export { InlinedElements };
