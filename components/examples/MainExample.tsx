import React, { useState } from 'react';
import PropsExample from '@/components/examples/PropsExample';
import Button from '@/components/form/Button';
import { Input } from '@/components/form/Input';

const MainExample: React.FC = () => {
    const [value, setValue] = useState('');
    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
    }
    return (
        <div>
            Hello next.js
            <Button id="foo">Foo</Button>
            <PropsExample onClick={() => alert('click click')}>Props Example Children Content</PropsExample>
            <br />
            <br />
            <Input type="text" value={value} onChange={onChange}></Input>
            <br />
            Value: {value}
        </div>
    );
};

export default MainExample;
