
import './Table.css'

export const Table=()=>{

    const onClick = (e) => {
         e.target.childNodes[0].classList.toggle('visible');
    }

    return <table style={{border: '1px solid black'}} onClick={onClick}>
        <tr>
            <td><span>1</span></td>
            <td><span>2</span></td>
            <td><span>3</span></td>
            <td><span>4</span></td>
        </tr>
        <tr>
            <td><span>5</span></td>
            <td><span>6</span></td>
            <td><span>7</span></td>
            <td><span>8</span></td>
        </tr>
        <tr>
            <td><span>9</span></td>
            <td><span>10</span></td>
            <td><span>11</span></td>
            <td><span>12</span></td>
        </tr>
        <tr>
            <td><span>13</span></td>
            <td><span>14</span></td>
            <td><span>15</span></td>
            <td><span>16</span></td>
        </tr>
    </table>
}