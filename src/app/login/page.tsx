import LoginPage from '@/components/auth/LoginPage'
import MaxWidthWrapper from '@/components/wrapper/Maxwidthwrapper'
import React from 'react'

const page = () => {
    return (
        <section>

            <MaxWidthWrapper>

                <LoginPage />
            </MaxWidthWrapper>
        </section>
    )
}

export default page