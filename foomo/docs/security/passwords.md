---
title: Passwords
slug: /security/passwords
authors: [philipp]
---

# Passwords

In the digital age, passwords are the keys to our virtual lives. From email accounts to online banking, they protect our sensitive information from unauthorized access. However, not all passwords are created equal. A strong password can be the difference between robust security and a catastrophic data breach. This guide will walk you through the characteristics of a secure password and why common advice might not be the best.

## Characteristics of a Secure Password

A secure password should be:

1.  **Long**: The longer a password is, the more combinations an attacker has to try, making it exponentially harder to crack. Aim for a minimum of 12 characters, but more is always better. A passphrase, which is a sequence of words, is even more secure and easier to remember.
2.  **Complex**: While length is the most important factor, complexity adds another layer of security. A good password should include a mix of uppercase and lowercase letters, numbers, and symbols. However, simple substitutions like replacing 'a' with '@' or 'o' with '0' are well-known to attackers and add little value.
3.  **Unique**: Never reuse passwords across different sites or services. If one site is compromised, attackers will try the same username and password combination on other popular sites. Using a unique password for each account limits the damage from a single breach.
4.  **Random**: The most secure passwords are those that are randomly generated. Avoid using easily guessable information like your name, birthday, or common words and phrases. A password manager can generate and store strong, random passwords for you.

## The XKCD Approach: "Password Strength"

The popular webcomic XKCD by Randall Munroe brilliantly illustrates the problem with conventional password advice. For years, we've been taught to create complex, hard-to-remember passwords that are, ironically, easy for computers to guess.

![Password Strength Comic by XKCD](https://imgs.xkcd.com/comics/password_strength.png)
*Source: [xkcd.com/936](https://xkcd.com/936/)*

The comic highlights a crucial concept: **entropy**. In the context of passwords, entropy measures the password's unpredictability. A higher entropy means a more secure password.

-   **"Tr0ub4dor&3"**: This password follows the typical complexity rules. It has an uppercase letter, a number, a symbol, and common substitutions. However, because these patterns are so common, they are easy for password-cracking software to check. The comic estimates its entropy at about 28 bits, which could be cracked in about 3 days. It's also difficult for a human to remember.

-   **"correct horse battery staple"**: This passphrase consists of four common but random words. It's much longer and doesn't rely on confusing substitutions. The estimated entropy is 44 bits, which would take about 550 years to crack using the same methods. The best part? It's significantly easier for a human to remember.

The takeaway is to favor length and randomness over forced complexity. A long passphrase of random words is far more secure and user-friendly than a short, complex password with predictable substitutions.

## Recommendations

-   **Use a Password Manager**: This is the single most important step you can take to improve your password security. A password manager can generate, store, and fill in long, random, and unique passwords for all your accounts. You only need to remember one strong master password. We recommend using [1Password](https://1password.com/).
-   **Enable Two-Factor Authentication (2FA)**: Wherever possible, enable 2FA. This adds a second layer of security by requiring a second form of verification, such as a code from your phone, in addition to your password.
-   **Be Wary of Phishing**: Be cautious of emails or messages asking for your login credentials. Always verify the source and navigate to websites directly rather than clicking on suspicious links.
