import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetWatchDataSelector } from '../../redux/ListingStore/Listring_Selector';
import { DataRow } from './Listing';
import { ListingTable } from './style/ListingStyled';

export default function WatchList() {
    const getWatchDataSelector = useSelector(GetWatchDataSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "GetWatchData" });
    }, [dispatch]);
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
            {DataRow(getWatchDataSelector, "watchlist")}
        </ListingTable>
    );
}
