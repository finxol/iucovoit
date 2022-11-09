export default interface Locale {
    aboutPage: {
        content: string[],
        thankYouDonors: string,
        makeADonation: string,
        unicovoitIsGreen: string,
    },
    activityPage: {
        title: string,
        bookings: string,
        offers: string,
        upcomingTrips: string,
        pastTrips: string,
    },
    appBar: {
        home: string,
        about: string,
        login: string,
        myActivity: string,
        myProfile: string,
        publishTrip: string,
    },
    book: {
        title: string,
        bookSeat: string,
        booked: string,
        requestSent: string,
        warning: string,
        departure: string,
        arrival: string,
        dateAndTime: string,
        price: string,
        distance: string,
        sendBooking: string,
        afterConfirmationContactExchanged: string,
    },
    builtForMobileWarning: string,
    contactForm: string,
    contact: {
        title: string,
        subtitle: string,
        name: string,
        email: string,
        message: string,
        send: string,
        sent: string,
    },
    credits: {
        illustrations: string,
        logo: string
    },
    error: {
        genericError: string,
        notFound: string,
        details: string,
        backToPrevious: string,
        tryAgain: string,
        unknown: string,
        required: string,
        tooLong: string,
        tooShort: string,
        invalid: string,
        tripDoesntExist: string,
    },
    faq: {
        title: string,
        content: {title: string, content: string}[],
    },
    form: {
        submit: string,
        cancel: string,
        delete: string,
        ok: string,
        required: string,
        optional: string,
        errors: {
            invalid: string,
            invalidEmail: string,
            invalidPassword: string,
        },
        departureCity: string,
        arrivalCity: string,
        departureDate: string,
        preciseAddress: string,
        time: string,
        city: string,
        search: string,
    },
    home: {
        cookieWarning: string,
        title: string,
        advantages: [
            {
                title: string,
                content: string
            },
            {
                title: string,
                content: string
            },
            {
                title: string,
                content: string
            }
        ],
        presentation: {
            title: string,
            description: string
        },
    },
    login: {
        title: string,
        description: string,
        universitiesList: string,
        addUniversityRequest: string,
        login: string,
    },
    learnMore: string,
    profile: {
        title: string,
        user: string,
        publicProfile: string,
        university: string,
        bio: string,
        nickname: string,
        contactInfo: {
            title: string,
            description: string,
            email: string,
            phone: string,
            addPhone: string,
            snapchat: string,
            addSnapchat: string,
            instagram: string,
            addInstagram: string,
            messenger: string,
            addMessenger: string,
        },
        preferences: {
            title: string,
            description: string,
            smokePref: {
                title: string,
                yes: string,
                no: string,
            },
            petsPref: {
                title: string,
                yes: string,
                no: string,
            },
            musicPref: {
                title: string,
                yes: string,
                no: string,
            },
        },
        confirmEmail: {
            short: string,
            title: string,
            description: string,
        },
    },
    privacyPolicy: string,
    settings: {
        title: string,
        changeTheme: string,
        lightTheme: string,
        darkTheme: string,
        logout: string,
        deleteAccount: {
            short: string,
            title: string,
            description: string,
            warning: string,
        },
        version: string,
    },
    termsOfUse: string,
    tripAdd: {
        title: string,
        offline: string,
        added: string,
        seeTrips: string,
        next: string,
        back: string,
        send: string,
        departureCity: {
            title: string,
            subtitle: string,
        },
        arrivalCity: {
            title: string,
            subtitle: string,
        },
        departureDate: {
            title: string,
        },
        seats: {
            title: string,
            subtitle: string,
            short: string,
        },
        price: {
            title: string,
            subtitle: string,
        },
        description: {
            title: string,
            subtitle: string,
        },
        priceExplanation: {
            short: string,
            title: string,
            description: string,
        },
    },
    trips: {
        title: string,
        noTrips: string,
        nothingToShow: string,
        offline: string,
    },
    trip: {
        title: string,
        placesRemaining: {
            singular: string,
            plural: string,
        },
        deleteTrip: {
            short: string,
            confirmation: {
                title: string,
                description: string,
            },
            success: {
                title: string,
                description: string,
            }
        },
        autoBook: string,
        pendingRequests: string,
        noBookings: string,
        bookings: string,
        acceptOrRejectBookings: string,
        refuse: string,
        confirmRefusal: string,
        seatBooked: string,
        seatBookedPending: string,
        confirmBookingCancellation: string,
    },
    verify: {
        title: string,
        subtitle: string,
        description: string,
        enterEmail: string,
        verify: string,
        enterCode: string,
        notReceived: string,
        resend: string,
        incorrectCode: string,
        correctEmail: string,
        emailAlreadyUsed: string,
        emailNotRecognised: string,
        success: string,
    },
}
