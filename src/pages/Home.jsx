import Header from '../components/Header';
import Card from '../components/Card';
import { cards } from '../data';
export default function HomePage() {
    return (
        <div>
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cards.map((card) => (
                    <Card key={card.id} {...card} />
                ))}
            </div>
        </div>
    )
}