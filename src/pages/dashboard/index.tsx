import { useState } from "react";
import { canSSRAuth } from "@/utils/cantSSRAuth";
import Head from "next/head";
import styles from './styles.module.scss'

import { Header } from "@/components/Header";
import { ModalOrder } from "@/components/ModalOrder";

import { FiRefreshCcw } from "react-icons/fi";
import Modal from 'react-modal';

import { setupAPIClient } from "@/services/api";
import { toast } from "react-toastify";

type OrderProps  = {
    id: string;
    table: number | string;
    status: boolean;
    draft: boolean;
    name: string | null;
}

interface HomeProps{
    orders: OrderProps[];
}

export type OrderItemProps = {
    id: string;
    amount: number ;
    order_id: string;
    product_id: string;
    product:{
        id:string;
        name:string;
        description: string;
        price: string;
        banner: string;
    }
    order:{
        id:string;
        table: string | number;
        status: boolean;
        name: string | null;
    }
}

export default function Dashboard({orders}: HomeProps){

    const [orderList, setOrderList] = useState(orders || []);

    const [modalItem, setModalItem] = useState<OrderItemProps[]>();
    const [modalVisible, setModalVisible] = useState(false);

    async function handleOpenModalView(id: string){
        const apiCliente = setupAPIClient();
        const response = await apiCliente.get('/order/detail', {
            params:{
                order_id: id,
            }
        })
        setModalItem(response.data);
        setModalVisible(true);
    }

    function handleCloseModal(){
        setModalVisible(false);
    }

    async function handleFinishItem(id: string){
        const apiCliente = setupAPIClient()

        await apiCliente.put('/order/finish',{
            order_id: id,
        })

        const response = await apiCliente.get('/orders');
        
        setOrderList(response.data);

        setModalVisible(false);
        toast.success("Pedido Finalizado!");
    }

    async function handleRefreshOrders(){
        const apiCliente = setupAPIClient();
        const response = await apiCliente.get('/orders');
        setOrderList(response.data);
        toast.success("Pedidos em aberto atualizados");
    }

    Modal.setAppElement('#__next');

    return(
        <>
            <Head>
                <title>Painel - BSL Pizzaria</title>
            </Head>
            <div>
                <Header/>

                <main className={styles.container}>
                    <div className={styles.containerHeader}>
                        <h1>Últimos Pedidos</h1>
                        <button onClick={handleRefreshOrders}>
                            <FiRefreshCcw color="#3FFFA3" size={25} />
                        </button>
                    </div>

                    <article className={styles.listOrders}>

                        {orderList.length === 0 && (
                            <span className={styles.emptyList}>Sem pedidos abertos!</span>
                        )}
                        {orderList.map( item => (
                            <section 
                                key={item.id}
                                className={styles.orderItem}>
                                <button
                                    onClick={ () => handleOpenModalView(item.id)}
                                >
                                    <div className={styles.tag}></div>
                                    <span>Mesa {item.table}</span>
                                </button>
                            </section>
                        ))}
                    </article>                    
                </main>
                {modalVisible && (
                    <ModalOrder 
                        isOpen={modalVisible}
                        onRequestClose={handleCloseModal}
                        order={modalItem}
                        handleFinishOrder={handleFinishItem}
                    />
                )}                
            </div>
        </>
    )
};

export const getServerSideProps = canSSRAuth(async (ctx) => {

    const apiClient = setupAPIClient(ctx);
    const response = await apiClient.get('/orders');

    console.log(response.data)
    return {
        props: {
            orders: response.data
        }
    }
});