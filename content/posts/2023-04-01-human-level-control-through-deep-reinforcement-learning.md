---
title: Human-level Control through Deep Reinforcement Learning
excerpt: "A deep Q-network (DQN) replaces the state-action values of a Q-table with a neural network whose input is the
state and whose output is a distribution over the possible actions. The DQN outperforms previous algorithms in almost
all the games, and its performance is comparable with or superior to a professional human player in the majority of
games."
date: "2023-05-01T00:00:00"
image: "/assets/blog/hello-world/cover.jpg"
---

**Authors**: _Volodymyr Mnih, Koray Kavukcuoglu, David Silver, Andrei A. Rusu, Joel Veness, Marc G. Bellemare, Alex
Graves, Martin Riedmiller, Andreas K. Fidjeland, Georg Ostrovski, Stig Petersen, Charles Beattie, Amir Sadik, Ioannis
Antonoglou, Helen King, Dharshan Kumaran, Daan Wierstra, Shane Legg, Demis Hassabis_

**Year**: _2015_

**URL**: [https://doi.org/10.1038/nature14236](https://doi.org/10.1038/nature14236)

## Summary

A deep Q-network (DQN) replaces the state-action values of a Q-table with a neural network whose input is the state and
whose output is a distribution over the possible actions.

The DQN outperforms previous algorithms in almost all the games, and its performance is comparable with or superior to a
professional human player in the majority of games.

## Methodology

### Preprocessing

Atari 2600 frames are $210 \times 160$ pixel images with a 128-colour palette. For each pixel of the frame, the maximum
color value between the previous frame and the current one is taken; sometimes games display some objects in even frames
and sometimes in odd frames because of the limited power of Atari 2600. For each frame the luminance value is then
extracted, and the final image is rescaled to $84 \times 84$. The function applies this preprocessing step to an $m = 4$
stack of the most recent frames, is the input of the DQN.

### Architecture

- Input: 4 frames $84 \times 84$
- First convolutional layer: 32 filters, $8 \times 8$ kernel, stride $4$
- Rectifier nonlinearity
- Second convolutional layer: 64 filters, $4 \times 4$ kernel, stride 2
- Rectifier nonlinearity
- Third convolutional layer: 64 filters, $3 \times 3$ kernel, stride 1
- Rectifier nonlinearity
- Fully-connected layer: 512 units
- Output layer: n actions

### Algorithm

$$
\begin{align*}
&\text{Initialize replay memory }D\text{ to capacity }N \\
&\text{Initialize action-value function }Q\text{ with random weights }\theta \\
&\text{Initialize target action-value function }\hat{Q}\text{ with weights }\theta^- = \theta \\
&\textbf{For}\text{ episode }= 1, M\textbf{ do} \\
&\hspace{1em}\text{Initialise sequence }s_1 = \{x_1\}\text{ and preprocessed sequence }\phi_1 = \phi(s_1) \\
&\hspace{1em}\textbf{For }t = 1, T\textbf{ do }\\
&\hspace{2em}\text{With probability } \epsilon \text{ select a random action }a_t \\
&\hspace{2em}\text{otherwise select }a_t = \argmax_a Q(\phi(s_t), a; \theta) \\
&\hspace{2em}\text{Execute action }a_t\text{ in emulator and observe reward }r_t\text{ and image }x_{t+1} \\
&\hspace{2em}\text{Set }s_{t+1} = s_t, a_t, x_{t+1}\text{ and preprocess }\phi_{t+1} = \phi(s_{t+1}) \\
&\hspace{2em}\text{Store transition }(\phi_t, a_t, r_t, \phi_{t+1})\text{ in }D \\
&\hspace{2em}\text{Sample random minibatch of transitions }(\phi_j, a_j, r_j, \phi_{j+1})\text{ from }D \\
&\hspace{2em}\text{Set }y_j = \begin{equation*}
\begin{cases}
r_j &\text{if episode terminates at step }j+1
\\
r_j + \gamma \max_{a'} \hat{Q}(\phi_{j+1}, a'; \theta^-) &\text{otherwise}
\end{cases}
\end{equation*} \\
&\hspace{2em}\text{Perform a gradient descent step on }(y_j − Q(\phi_j, aj; \theta))^2 \text{ with respect to} \\
&\hspace{2em}\text{the network parameters }\theta \\
&\hspace{2em}\text{Every }C \text{ steps reset } \hat{Q} = Q \\
&\hspace{1em}\textbf{End for} \\
&\textbf{End for}
\end{align*}
$$

The Q-learning update at iteration i uses the following loss function:

$$
L_i(\theta_i) = \mathbb{E}{(s, a, r, s') \sim U(D)}
\Bigg[ \Big( r + \gamma\max{a'} Q(s', a'; \theta^-_i) - Q(s, a; \theta_i) \Big)^2 \Bigg]
$$

### Training

- Rewards clipped between -1 and 1
- RMSProp with minibatches of size 32
- $\epsilon$-greedy policy, with $\epsilon$ annealed linearly from 1.0 to 0.1 over the first million frames, and fixed
  at 0.1 thereafter
- 50 million frames in total
- Replay memory of 1 million most recent frames

### Evaluation

- Different initial random conditions
- $\epsilon$-greedy policy, with $\epsilon = 0.05$
- Each game played 30 times
- Up to 5 minutes each time
