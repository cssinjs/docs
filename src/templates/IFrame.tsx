import React from 'react';

import IFrame from '../components/IFrame';
import { IFramePage } from '../pages';

interface Props {
  pageContext: IFramePage;
}

export default ({ pageContext }: Props) => <IFrame src={pageContext.url} />;
