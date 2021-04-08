import { Container, Row, Col } from 'react-bootstrap';
import OrganizationChart from "@dabeng/react-orgchart";
import MemberNode from "./MemberNode";
import './index.css';
import AppLayout from '../../../layouts/AppLayout';
import { SlideBar } from '../../../components/SlideBar';

export const TreeView = () => {
    const ds = {
        members: 2,
        id: 1,
        lastName: 'Claude',
        phoneNumber: '789551152',
        firstName: 'IRANZI',
        parentMemberId: '0',
        memberId: '593E63',
        level: 0,
        children: [
            {
                members: 2,
                id: 2,
                lastName: 'Pierratono Costa',
                phoneNumber: '789551152',
                firstName: 'Mahoro',
                parentMemberId: '593E63',
                memberId: '2A3823',
                level: 0,
                children: [
                    {
                        members: 0,
                        id: 4,
                        lastName: 'Alice',
                        phoneNumber: '789551152',
                        firstName: 'KAMARIZA',
                        parentMemberId: '2A3823',
                        memberId: '5839A3',
                        level: 0,
                        children: []
                    },
                    {
                        members: 0,
                        id: 5,
                        lastName: 'John',
                        phoneNumber: '789551152',
                        firstName: 'RUKUNDO',
                        parentMemberId: '2A3823',
                        memberId: '243D83',
                        level: 0,
                        children: []
                    }
                ]
            },
            {
                members: 2,
                id: 3,
                lastName: 'Obed Patience',
                phoneNumber: '789551152',
                firstName: 'NGABO',
                parentMemberId: '593E63',
                memberId: '273723',
                level: 0,
                children: [
                    {
                        members: 0,
                        id: 6,
                        lastName: 'Cousin',
                        phoneNumber: '789551152',
                        firstName: 'ISHIMWE',
                        parentMemberId: '273723',
                        memberId: 'D73263',
                        level: 0,
                        children: []
                    },
                    {
                        members: 0,
                        id: 7,
                        lastName: 'Francois',
                        phoneNumber: '789551152',
                        firstName: 'HAKIZIMANA',
                        parentMemberId: '273723',
                        memberId: 'BA3423',
                        level: 0,
                        children: []
                    }
                ]
            }
        ]
    };
    return (
        <AppLayout>
            <section className='home-slide'>
                <Container>
                    <Row>
                        <SlideBar></SlideBar>
                        <Col lg={9} className='WhitePanel_Home '>
                            <br />
                            <p className=' mt-0 mb-0 title text-capitalize text-bold'>
                                | Members
                            </p>
                            <p className='border-bottom mt-2'></p>

                            <Row>
                                <Col lg={12} className='mb-3'>
                                    <OrganizationChart datasource={ds} chartClass='myChart' zoom={true} pan={true} NodeTemplate={MemberNode} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </AppLayout>
    );
};