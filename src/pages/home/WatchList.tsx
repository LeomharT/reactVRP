import React from 'react';
import { useSelector } from 'react-redux';
import { GetListingDataSelector } from '../../redux/ListingStore/Listring_Selector';
import { DataRow } from './Listing';
import { ListingTable } from './style/ListingStyled';

export default function WatchList() {
    const getListringDataSelector = useSelector(GetListingDataSelector);

    return (
        <ListingTable>
            <thead>
                <tr>
                    <th>companie</th>
                    <th>opening price</th>
                    <th>bid price</th>
                    <th>ask(sell) price</th>
                    <th>high price</th>
                    <th>low price</th>
                    <th>close price</th>
                    <th>buy / sell</th>
                </tr>
            </thead>
            {DataRow(getListringDataSelector, "watchlist")}
        </ListingTable>
    );
}
