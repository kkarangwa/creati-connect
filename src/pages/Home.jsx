import { useState } from 'react';
import Header from '../components/Header';
import AddAssetPopup from '../components/AddAssetPopup';
import { assets } from '../data';
import Card from '../components/Card';

export default function Home() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [localAssets, setLocalAssets] = useState(assets);

    const handleAddAsset = (newAsset) => {
        setLocalAssets([newAsset, ...localAssets]);
        assets.unshift(newAsset);
    };

    return (
        <div className="relative">
            <Header onAddClick={() => setIsPopupOpen(true)} />
            
            <AddAssetPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                onAdd={handleAddAsset}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {localAssets.map((asset) => (
                    <Card key={asset.id} {...asset} />
                ))}
            </div>
        </div>
    );
}