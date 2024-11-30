import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { Brand, Model } from '@/types';
import {Picker} from '@react-native-picker/picker';


let getBrands = async () => {
    const headers = { method: 'POST', 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vYS52YW5kZW5iZXJnaGVAYXAuYmUiLCJpYXQiOjE3MzI1NDEwNTd9.G8AAh6Al4oenOLvXVbV4DtnAce00c1fwJQDs9k5p1B8' };

    const baseURL = "https://sampleapis.assimilate.be/car/brands";

    fetch(baseURL, { headers })

        .then(resp => resp.json())

        .then(data => console.log(data));
};

const newModel = () => {
    const [brands, setBrands] = useState<Brand[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedBrand, setSelectedBrand] = useState();
    let getBrands = async () => {
        setLoading(true);
        const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vYS52YW5kZW5iZXJnaGVAYXAuYmUiLCJpYXQiOjE3MzI1NDEwNTd9.G8AAh6Al4oenOLvXVbV4DtnAce00c1fwJQDs9k5p1B8' };
        let response = await fetch('https://sampleapis.assimilate.be/car/brands', { headers });
        let data: Brand[] = await response.json();
        setBrands(data);
        setLoading(false);
    };
    useEffect(() => {
        getBrands();
    }, []);
    return (
        <>
            <Text>newModel</Text>
            <Picker
                selectedValue={selectedBrand}
                onValueChange={(itemValue, itemIndex) => setSelectedBrand(itemValue)}>
                {brands.map((brand) => {
                    return <Picker.Item label={brand.name} value={brand.id} key={brand.id} />
                })}
            </Picker></>
    );
}
export default newModel;