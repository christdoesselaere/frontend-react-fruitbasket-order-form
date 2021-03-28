import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import './App.css';
import logo from './assets/header-logo.png'


function App() {
    const [bananaCounter, setBananaCounter] = useState(0);
    const [strawberryCounter, setStrawberryCounter] = useState(0);
    const [appleCounter, setAppleCounter] = useState(0);
    const [kiwiCounter, setKiwiCounter] = useState(0);

    function resetCounters() {
        setBananaCounter(0);
        setStrawberryCounter(0);
        setAppleCounter(0);
        setKiwiCounter(0);
    }

    const {handleSubmit, errors, register, watch} = useForm({
        mode: "onTouched"
    });

    const selectedCustom = watch('deliverFrequency');

    function formSubmit(data) {
        console.log(data);
    }

    return (
        <>
            <header>
                <img src={logo} alt="logo"/>
            </header>
            <main>
                <div className="cart">
                    <div className="cart-component" id="bananas">
                        <h2>🍌 Bananen</h2>
                        <div className="counter">
                            <button
                                type="button"
                                className="count-button"
                                onClick={() => setBananaCounter(bananaCounter > 0 ? (bananaCounter - 1) : (bananaCounter))}
                            >
                                -
                            </button>
                            <p className="count-number">{bananaCounter}</p>
                            <button
                                type="button"
                                className="count-button"
                                onClick={() => setBananaCounter(bananaCounter + 1)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className="cart-component" id="strawberries">
                        <h2>🍓 Aardbeien</h2>
                        <div className="counter">
                            <button
                                type="button"
                                className="count-button"
                                onClick={() => setStrawberryCounter(strawberryCounter > 0 ? (strawberryCounter - 1) : (strawberryCounter))}
                            >
                                -
                            </button>
                            <p className="count-number">{strawberryCounter}</p>
                            <button
                                type="button"
                                className="count-button"
                                onClick={() => setStrawberryCounter(strawberryCounter + 1)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className="cart-component" id="apples">
                        <h2>🍏 Appels</h2>
                        <div className="counter">
                            <button
                                type="button"
                                className="count-button"
                                onClick={() => setAppleCounter(appleCounter > 0 ? (appleCounter - 1) : (appleCounter))}
                            >
                                -
                            </button>
                            <p className="count-number">{appleCounter}</p>
                            <button
                                type="button"
                                className="count-button"
                                onClick={() => setAppleCounter(appleCounter + 1)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className="cart-component" id="kiwis">
                        <h2>🥝 Kiwi's</h2>
                        <div className="counter">
                            <button
                                type="button"
                                className="count-button"
                                onClick={() => setKiwiCounter(kiwiCounter > 0 ? (kiwiCounter - 1) : (kiwiCounter))}
                            >
                                -
                            </button>
                            <p className="count-number">{kiwiCounter}</p>
                            <button
                                type="button"
                                className="count-button"
                                onClick={() => setKiwiCounter(kiwiCounter + 1)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="reset-button"
                        onClick={resetCounters}
                    >
                        Reset
                    </button>
                </div>
            </main>
            <footer>
                <form onSubmit={handleSubmit(formSubmit)}>
                    <h3>Uw gegevens</h3>
                    <fieldset className="customer-details">

                        <label htmlFor="form-first-name">
                            Voornaam:
                            <input
                                type="text"
                                name="name"
                                id="form-first-name"
                                ref={register({
                                    required: {
                                        value: true,
                                        message: 'U heeft geen voornaam ingevuld.',
                                    }
                                })}
                            />
                        </label>
                        <label htmlFor="form-surname">
                            Achternaam:
                            <input
                                type="text"
                                name="surname"
                                id="form-surname"
                                ref={register({
                                    required: {
                                        value: true,
                                        message: 'U heeft geen achternaam ingevuld.',
                                    }
                                })}
                            />
                        </label>
                        <label htmlFor="form-age">
                            Leeftijd:
                            <input
                                type="number"
                                name="age"
                                id="form-age"
                                ref={register({
                                    min: {
                                        value: 18,
                                        message: 'U moet minimaal 18 jaar oud zijn.'
                                    },
                                    required: {
                                        value: true,
                                        message: 'U heeft geen leeftijd ingevuld.',
                                    }
                                })}
                            />
                        </label>
                        <label htmlFor="form-zipcode">
                            Postcode:
                            <input
                                type="text"
                                name="zipcode"
                                id="form-zipcode"
                                ref={register({
                                    required: {
                                        value: true,
                                        message: 'U heeft geen postcode ingevuld.',
                                    },
                                    pattern: {
                                        value: /^[0-9]{4}[a-z]{2}$/,
                                        message: 'U heeft geen geldige postcode ingevuld.'
                                    }
                                })}
                            />
                        </label>
                        <label htmlFor="form-house-number">
                            Huisnummer:
                            <input
                                type="number"
                                name="houseNumber"
                                id="form-adress"
                                ref={register({
                                    required: {
                                        value: true,
                                        message: 'U heeft geen huisnummer ingevuld.',
                                    }
                                })}
                            />
                        </label>
                    </fieldset>
                    <fieldset className="delivery-details">
                        <div className="deliveryFrequency">
                            <h3>Bezorgfrequentie</h3>
                            <label htmlFor="deliver-weekly">
                                <input
                                    type="radio"
                                    id="deliver-weekly"
                                    name="deliverFrequency"
                                    value="weekly"
                                    ref={register}
                                />
                                Iedere week
                            </label>
                            <label htmlFor="deliver-every-two-weeks">
                                <input
                                    type="radio"
                                    id="deliver-every-two-weeks"
                                    name="deliverFrequency"
                                    value="every-two-weeks"
                                    ref={register}
                                />
                                Om de week
                            </label>
                            <label htmlFor="deliver-monthly">
                                <input
                                    type="radio"
                                    id="deliver-monthly"
                                    name="deliverFrequency"
                                    value="monthly"
                                    ref={register}
                                />
                                Iedere maand
                            </label>
                            <label htmlFor="deliver-custom">
                                <input
                                    type="radio"
                                    id="deliver-custom"
                                    name="deliverFrequency"
                                    value="custom"
                                    ref={register}
                                />
                                Anders
                            </label>
                            {selectedCustom === 'custom' && (
                                <input
                                    type="text"
                                    name="customDelivery"
                                    id="custom-delivery"
                                    ref={register({
                                        required: {
                                            value: true,
                                            message: 'U heeft geen alternative bezorgfrequentie aangegeven.'
                                        }
                                    })}
                                />
                            )}
                        </div>
                        <div className="delivery-message">
                            <h3>Opmerking</h3>
                            <textarea
                                name="message"
                                id="delivery-message"
                                placeholder="Vul hier uw opmerking in (max. 200 karakters)."
                                ref={register({
                                        maxLength: {
                                            value: 200,
                                            message: 'Maximaal 200 karakters toegestaan.',
                                        }
                                    }
                                )}
                            >
                            </textarea>
                            {errors.message && <p className="error-message">{errors.message.message}</p>}
                        </div>
                    </fieldset>
                    <label htmlFor="delivery-terms">
                        <input
                            type="checkbox"
                            name="acceptedTerms"
                            id="delivery-terms"
                            ref={register({
                                required: {
                                    value: true,
                                    message: 'U heeft de algemene voorwaarden niet geaccepteerd.'
                                }
                            })}
                        />
                        Ik ga akkoord met de algemene voorwaarden
                    </label>
                    <div className="error-block">
                        {errors.name && <p className="error-message">{errors.name.message}</p>}
                        {errors.surname && <p className="error-message">{errors.surname.message}</p>}
                        {errors.age && <p className="error-message">{errors.age.message}</p>}
                        {errors.zipcode && <p className="error-message">{errors.zipcode.message}</p>}
                        {errors.houseNumber && <p className="error-message">{errors.houseNumber.message}</p>}
                        {errors.customDelivery && <p className="error-message">{errors.customDelivery.message}</p>}
                        {errors.acceptedTerms && <p className="error-message">{errors.acceptedTerms.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="send-button"
                    >
                        Verzenden
                    </button>
                </form>
            </footer>
        </>
    );
}

export default App;
