import React from 'react';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
    const handleClick = () => {

    }
    return (
        <div>
            <div>
                <Button secondary rounded outline className='mb-5' onClick={handleClick}>
                    <GoBell />
                    Click Me!
                </Button>
            </div>
            <div>
                <Button danger outline>
                    <GoCloudDownload />
                    Buy Now
                </Button>
            </div>
            <div>
                <Button warning>
                    <GoDatabase />
                    See Deals!
                </Button>
            </div>
            <div>
                <Button secondary outline>
                    Hide Ads!
                </Button>
            </div>
            <div>
                <Button primary rounded>
                    Something!
                </Button>
            </div>

        </div>
    )
}

export default ButtonPage;