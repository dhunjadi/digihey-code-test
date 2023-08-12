import {useState} from 'react';
import Button from '../components/Button';
import {encode} from '../services/userServices';
import Navbar from '../components/Navbar';

const EncodePage = () => {
    const [inputText, setInputText] = useState<string>('');
    const [encodedText, setIncodedText] = useState<string>('');
    const isDisabled = !inputText;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await encode(inputText).then((res) => {
            setIncodedText(res.encodedString);
        });
    };

    return (
        <>
            <div className="p-encode">
                <Navbar />
                <div className="p-encode__header">
                    <h1>Encoder</h1>
                </div>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter your text"
                        value={inputText}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}
                    />

                    <Button type="submit" disabled={isDisabled}>
                        Encode
                    </Button>
                </form>
                <span>{encodedText}</span>
            </div>
        </>
    );
};

export default EncodePage;
