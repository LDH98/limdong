import { Component } from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>제목</th>
                <td>내용</td>
            </tr>
        </thead>
    )
}

const TableBody = () => {
    return (
        <tbody>
            <tr>
                <th>제목</th>
                <td>내용</td>
            </tr>
        </tbody>
    )
}

class Table extends Component {
    render() {
        return (
            <table>
                <TableHeader />
                <TableBody />
            </table>
        );
    }
}

export default Table