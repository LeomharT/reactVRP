import styled from "styled-components";
export const ListingTable = styled.table`
display        : "flex";
margin         : 0;
width          : 100%;
border-collapse: collapse;
tr th,tr td
{
    border    : 1px solid lightgrey;
    text-align: center;
}
tr th
{
    box-sizing: border-box;
    padding: 5px;
}
`;
