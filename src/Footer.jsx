function Footer() {
    return (
        <footer className='bg-black text-white text-center text-lg'>
            <hr />
            <p>&copy; All right reserved, {new Date().getFullYear()}</p>
        </footer>
    );
}

export default Footer