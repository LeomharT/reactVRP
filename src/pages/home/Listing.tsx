import { Button } from '@zendeskgarden/react-buttons';
import { Close, Notification, Title, useToast } from '@zendeskgarden/react-notifications';
import React, { ReactNode, useCallback, useEffect } from 'react';
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
            {DataRow(getListringDataSelector, "listing")}
        </ListingTable>
    );
}

/**
 *
 * @description row of data
 * @param data
 * @returns
 */
export const DataRow = (data: ListingData[], dataType: string): ReactNode => {

    const { addToast } = useToast();
    const handleClick = useCallback(
        () => {
            return () => {
                addToast(
                    ({ close }) => (
                        <Notification type='success' style={{ width: '450px' }}>
                            <Title>Info</Title>
                            Turnip greens yarrow ricebean cauliflower sea lettuce kohlrabi amaranth water
                            <Close aria-label="Close" onClick={close} />
                        </Notification>
                    ),
                    { placement: "top" }
                );
            };
        },
        [addToast]
    );
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
                            &nbsp;&nbsp;
                            {(() => {
                                switch (dataType) {
                                    case "listing": {
                                        return (
                                            <Button
                                                size='small'
                                                onClick={handleClick()}
                                            >
                                                Add Watch
                                            </Button>
                                        );
                                    }
                                    default: {
                                        return null;
                                    }
                                }
                            })()}
                        </td>
                    </tr>
                );
            })}
        </tbody>
    );
};
