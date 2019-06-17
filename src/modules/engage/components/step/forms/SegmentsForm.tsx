import { IButtonMutateProps } from 'modules/common/types';
import { Form } from 'modules/segments/components/common';
import {
  ISegment,
  ISegmentDoc,
  ISegmentField,
  ISegmentWithConditionDoc
} from 'modules/segments/types';
import * as React from 'react';

type Props = {
  fields: ISegmentField[];
  save: (params: { doc: ISegmentWithConditionDoc }) => void;
  headSegments: ISegment[];
  count: (segment: ISegmentDoc) => void;
  renderButton: (props: IButtonMutateProps) => JSX.Element;
  afterSave: () => void;
};

const SegmentsForm = (props: Props) => {
  const { fields, save, headSegments, count, afterSave, renderButton } = props;

  return (
    <Form
      fields={fields}
      // save={save}
      headSegments={headSegments}
      count={count}
      afterSave={afterSave}
      renderButton={renderButton}
    />
  );
};

export default SegmentsForm;
