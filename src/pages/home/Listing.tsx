import { Button } from '@zendeskgarden/react-buttons';
import React, { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListingData } from '../../redux/ListingStore/Listing_Types';
import { GetListingDataSelector } from '../../redux/ListingStore/Listring_Selector';
import { ListingTable } from './style/ListingStyled';


export default function Listing() {
    const getListringDataSelector = useSelector(GetListingDataSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "GetListingData" });
        console.log(1);
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
            {DataRow(getListringDataSelector)}
        </ListingTable>
    );
}

/**
 *
 * @description row of data
 * @param data
 * @returns
 */
const DataRow = (data: ListingData[]): ReactNode => {
    if (!data) return null;
    return (
        <tbody>
            {data.map((d: ListingData, index: number) => {
                return (
                    <tr key={index}>
                        <td>
                            {d.companies}
                        </td>
                        <td>
                            {d.openingprice}
                        </td>
                        <td>
                            {d.closeprice}
                        </td>
                        <td>
                            {d.bidprice}
                        </td>
                        <td>
                            {d.askprice}
                        </td>
                        <td>
                            {d.highprice}
                        </td>
                        <td>
                            {d.lowprice}
                        </td>
                        <td>
                            <Button size='small'>Buy</Button>
                            &nbsp;&nbsp;
                            <Button size='small'>Sell</Button>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    );
};
