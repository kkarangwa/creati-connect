import { useState } from 'react';
import Header from '../components/Header';
import AddAssetPopup from '../components/AddAssetPopup';
import { assets, jobs } from '../data';
import JobCard from '../components/JobCard';

export default function JobsPage() {
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
                {jobs.map((job) => (
                    <JobCard key={job.id} {...job} />
                ))}
            </div>
        </div>
    );
}
