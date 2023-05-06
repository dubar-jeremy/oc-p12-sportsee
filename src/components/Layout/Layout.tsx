import PropTypes from 'prop-types';
import { Header } from './Header';
import { Aside } from './Aside';


interface LayoutProps {
    children?: React.ReactNode
};

// write jsdoc
/**
 * @param {LayoutProps} children - averageSessions
 * @returns {JSX.Element} - JSX element
 * @description - LAyout of the app
 * @example
 * <Layout>
 * <div>children</div>
 * </Layout>
*/
export const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <>
            <Header />
            <main>
                <Aside />
                {children}
            </main>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node
}