import React, { useState } from 'react';
import Image from 'next/image';

type ToggleButtonProps = {
    iconSrc: string;
    activeColor: string;
    index: number;
    isDisabled?: boolean;
    onClick: (index: number) => void;
};

const ToggleButton: React.FC<ToggleButtonProps> = ({ iconSrc, activeColor, index, isDisabled, onClick }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
	if (isDisabled) return;
	setIsActive(!isActive);
	onClick(index);
    };

    return (
	<button
	onClick={handleClick}
	disabled={isDisabled}
	className={`w-16 h-16 p-2 m-1 border-none cursor-pointer flex items-center justify-center
${isDisabled ? 'bg-gray-500 text-gray-400 cursor-not-allowed' : 'text-white'}
${isActive ? `bg-${activeColor}-500` : 'bg-gray-500'}
`}
	    >
	    {iconSrc && <Image src={iconSrc} alt={`icon-${index}`} width={40} height={40} />}
	</button>
    );
};

const Boutons: React.FC = () => {
    const [disabledButtonColor, setDisabledButtonColor] = useState<string>('gray');

    const handleToggleClick = (index: number) => {
	if (index === 3) {
	    setDisabledButtonColor((prevColor) => (prevColor === 'green' ? 'red' : 'green'));
	}
    };

    return (
	<div className="flex">
	    <ToggleButton
        iconSrc="/images/svg/a_pierre.svg"
        activeColor="blue"
        index={0}
        onClick={handleToggleClick}
	    />
	    <ToggleButton
        iconSrc="/images/svg/a_papier.svg"
        activeColor="blue"
        index={1}
        onClick={handleToggleClick}
	    />
	    <ToggleButton
        iconSrc="/images/svg/a_ciseaux.svg"
        activeColor="blue"
        index={2}
        onClick={handleToggleClick}
	    />
	    <ToggleButton
        iconSrc=""
        activeColor={disabledButtonColor}
	index={3}
        isDisabled={true}
        onClick={handleToggleClick}
	    />
	    </div>
    );
};

export default Boutons;
