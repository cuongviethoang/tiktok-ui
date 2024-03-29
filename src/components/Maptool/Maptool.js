import { memo } from 'react';
import AccountItem from '~/components/AccountItem';

function MapTool({ data }) {
    return data.map((user) => <AccountItem key={user.id} data={user} />);
}

export default memo(MapTool);
