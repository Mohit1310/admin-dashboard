import "./WidgetsLg.css";

export default function WidgetsLg() {
  const Button = ({ type }) => {
    return <button className={"widgetsLg__button " + type}>{type}</button>;
  };

  return (
    <div className="widgetsLg">
      <h3 className="widgetsLg__title">Latest Transaction</h3>
      <table className="widgetsLg__table">
        <thead>
          <tr className="widgetsLg__tr">
            <th className="widgtsLg__th">Customer</th>
            <th className="widgtsLg__th">Date</th>
            <th className="widgtsLg__th">Amount</th>
            <th className="widgtsLg__th">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="widgetsLg__tr">
            <td className="widgetsLg__user">
              <img
                src="https://i.pinimg.com/originals/04/46/5e/04465e2a34d62100a6d9f55d9ffcb413.jpg"
                alt="User Profile"
                className="widgetsLg__img"
              />
              <span className="widgetsLg__name">Lucifer Morningstar</span>
            </td>
            <td className="widgetsLg__date">2 Jun 2023</td>
            <td className="widgetsLg__amount">$225.88</td>
            <td className="widgetsLg__status">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetsLg__tr">
            <td className="widgetsLg__user">
              <img
                src="https://i.pinimg.com/originals/04/46/5e/04465e2a34d62100a6d9f55d9ffcb413.jpg"
                alt="User Profile"
                className="widgetsLg__img"
              />
              <span className="widgetsLg__name">Lucifer Morningstar</span>
            </td>
            <td className="widgetsLg__date">2 Jun 2023</td>
            <td className="widgetsLg__amount">$225.88</td>
            <td className="widgetsLg__status">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="widgetsLg__tr">
            <td className="widgetsLg__user">
              <img
                src="https://i.pinimg.com/originals/04/46/5e/04465e2a34d62100a6d9f55d9ffcb413.jpg"
                alt="User Profile"
                className="widgetsLg__img"
              />
              <span className="widgetsLg__name">Lucifer Morningstar</span>
            </td>
            <td className="widgetsLg__date">2 Jun 2023</td>
            <td className="widgetsLg__amount">$225.88</td>
            <td className="widgetsLg__status">
              <Button type="Pending" />
            </td>
          </tr>
          <tr className="widgetsLg__tr">
            <td className="widgetsLg__user">
              <img
                src="https://i.pinimg.com/originals/04/46/5e/04465e2a34d62100a6d9f55d9ffcb413.jpg"
                alt="User Profile"
                className="widgetsLg__img"
              />
              <span className="widgetsLg__name">Lucifer Morningstar</span>
            </td>
            <td className="widgetsLg__date">2 Jun 2023</td>
            <td className="widgetsLg__amount">$225.88</td>
            <td className="widgetsLg__status">
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
