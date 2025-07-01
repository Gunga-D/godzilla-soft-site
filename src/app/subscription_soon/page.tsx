import Link from "next/link";
import "./style.css"
import Image from "next/image";

export default function Page() {
    return (
        <div className="SubscriptionSoonContainer">
            <div className="SubscriptionSoonImageWrapper">
                <Image
                    src="/CoomingSoon.png"
                    alt="Cooming soon mascot"
                    width={300}
                    height={300}
                    priority
                />
            </div>
            <div className="SubscriptionSoonTextContent">
            <h1 className="SubscriptionSoonMain">Coming soon!</h1>
            <h2 className="SubscriptionSoonTitle">Подписка пока недоступна</h2>
            <p className="SubscriptionSoonDescription">
                Подписка скоро появится, мы обязательно сообщим, как она будет доступна.
            </p>
            <Link className="SubscriptionSoonButton" href={"/"}>
                На главную
            </Link>
            </div>
      </div>
    );
}