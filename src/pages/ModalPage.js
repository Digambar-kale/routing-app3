import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";


function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleCLick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>I Accept</Button>
        </div>
    );

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>Here is an important agreement to accept!</p>
    </Modal>

    return (
        <div>
            <Button onClick={handleCLick} primary>Open Modal</Button>
            {showModal && modal}

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eum nihil aliquam ipsam illo cumque possimus repudiandae qui magni corrupti minima maiores illum eaque odit consequatur, nam sint, obcaecati amet.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eum nihil aliquam ipsam illo cumque possimus repudiandae qui magni corrupti minima maiores illum eaque odit consequatur, nam sint, obcaecati amet.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eum nihil aliquam ipsam illo cumque possimus repudiandae qui magni corrupti minima maiores illum eaque odit consequatur, nam sint, obcaecati amet.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eum nihil aliquam ipsam illo cumque possimus repudiandae qui magni corrupti minima maiores illum eaque odit consequatur, nam sint, obcaecati amet.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eum nihil aliquam ipsam illo cumque possimus repudiandae qui magni corrupti minima maiores illum eaque odit consequatur, nam sint, obcaecati amet.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eum nihil aliquam ipsam illo cumque possimus repudiandae qui magni corrupti minima maiores illum eaque odit consequatur, nam sint, obcaecati amet.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eum nihil aliquam ipsam illo cumque possimus repudiandae qui magni corrupti minima maiores illum eaque odit consequatur, nam sint, obcaecati amet.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eum nihil aliquam ipsam illo cumque possimus repudiandae qui magni corrupti minima maiores illum eaque odit consequatur, nam sint, obcaecati amet.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eum nihil aliquam ipsam illo cumque possimus repudiandae qui magni corrupti minima maiores illum eaque odit consequatur, nam sint, obcaecati amet.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eum nihil aliquam ipsam illo cumque possimus repudiandae qui magni corrupti minima maiores illum eaque odit consequatur, nam sint, obcaecati amet.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eum nihil aliquam ipsam illo cumque possimus repudiandae qui magni corrupti minima maiores illum eaque odit consequatur, nam sint, obcaecati amet.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eum nihil aliquam ipsam illo cumque possimus repudiandae qui magni corrupti minima maiores illum eaque odit consequatur, nam sint, obcaecati amet.
            </p>

        </div>
    );
};

export default ModalPage;