import { TitleEl, SubTitleEl, FiltersList, FiltersItem, LabelEl, InputEl } from "./Filters.styled";

import { useState } from "react";

import { ReactComponent as IconAc } from '../../assets/icons/ac.svg';
import { ReactComponent as IconAutomatic } from '../../assets/icons/automatic.svg';
import { ReactComponent as IconKitchen } from '../../assets/icons/kitchen.svg';
import { ReactComponent as IconShower } from '../../assets/icons/shower.svg';
import { ReactComponent as IconTv } from '../../assets/icons/tv.svg';
import { ReactComponent as IconVan } from '../../assets/icons/van.svg'
import { ReactComponent as IconFullyIntegrated } from '../../assets/icons/integrated.svg';
import { ReactComponent as IconAlcove } from '../../assets/icons/alcove.svg'

const Filters = () => {

    const [isChecked, setIsChecked] = useState({
        filterAc: false,
        filterAutomatic: false,
        filterKitchen: false,
        filterTv: false,
        filterShower: false,
        filterAlcove: false,
        filterVan: false,
        filterFullyIntegrated: false,
    });

    const handleCheckboxChange = (evt) => {
        const { id, checked } = evt.target;
        setIsChecked(prevState => ({
            ...prevState,
            [id]: checked
        }));
    };
    return (
        <>
            <TitleEl>Filters</TitleEl>
            <SubTitleEl>Vehicle equipment</SubTitleEl>
            <FiltersList>
                <FiltersItem>
                    <InputEl type="checkbox" id="filterAc" onChange={handleCheckboxChange} />
                    <LabelEl htmlFor="filterAc" checked={isChecked.filterAc}>
                        <IconAc />
                        AC
                    </LabelEl>
                </FiltersItem>
                <FiltersItem>
                    <InputEl type="checkbox" id="filterAutomatic" onChange={handleCheckboxChange} />
                    <LabelEl htmlFor="filterAutomatic" checked={isChecked.filterAutomatic}>
                        <IconAutomatic />
                        Automatic
                    </LabelEl>
                </FiltersItem>
                <FiltersItem>
                    <InputEl type="checkbox" id="filterKitchen" onChange={handleCheckboxChange} />
                    <LabelEl htmlFor="filterKitchen" checked={isChecked.filterKitchen}>
                        <IconKitchen />
                        Kitchen
                    </LabelEl>
                </FiltersItem>
                <FiltersItem>
                    <InputEl type="checkbox" id="filterTv" onChange={handleCheckboxChange} />
                    <LabelEl htmlFor="filterTv" checked={isChecked.filterTv}>
                        <IconTv />
                        TV
                    </LabelEl>
                </FiltersItem>
                <FiltersItem>
                    <InputEl type="checkbox" id="filterShower" onChange={handleCheckboxChange} />
                    <LabelEl htmlFor="filterShower" checked={isChecked.filterShower}>
                        <IconShower />
                        Shower
                    </LabelEl>
                </FiltersItem>
            </FiltersList>
            <SubTitleEl>Vehicle type</SubTitleEl>
            <FiltersList>
                <FiltersItem>
                    <InputEl type="checkbox" id="filterVan" onChange={handleCheckboxChange} />
                    <LabelEl htmlFor="filterVan" checked={isChecked.filterVan}>
                        <IconVan />
                        Van
                    </LabelEl>
                </FiltersItem>
                <FiltersItem>
                    <InputEl type="checkbox" id="filterFullyIntegrated" onChange={handleCheckboxChange} />
                    <LabelEl htmlFor="filterFullyIntegrated" checked={isChecked.filterFullyIntegrated}>
                        <IconFullyIntegrated />
                        Fully Integrated
                    </LabelEl>
                </FiltersItem>
                <FiltersItem>
                    <InputEl type="checkbox" id="filterAlcove" onChange={handleCheckboxChange} />
                    <LabelEl htmlFor="filterAlcove" checked={isChecked.filterAlcove}>
                        <IconAlcove />
                        Alcove
                    </LabelEl>
                </FiltersItem>
            </FiltersList>
        </>
    )
}

export default Filters;