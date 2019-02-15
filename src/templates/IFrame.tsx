import React from 'react';

import IFrame from '../components/IFrame';
import { IFramePage } from '../pages';

interface Props {
  pageContext: { page: IFramePage };
}

export default ({ pageContext }: Props) => <IFrame src={pageContext.page.url} />;
