// Copyright by Undisclosed Author(s) of Unknown Origin
// Copyright (c) 2018-2020, The TurtleCoin Developers
//
// Please see the included LICENSE file for more information.

'use strict';

/**
 * @ignore
 */
const crc = require('crc');

/**
 * @ignore
 */
const defaultWordset = 'english';

/**
 * @ignore
 */
const GetRandomValues = require('get-random-values');

/**
 * @ignore
 */
const wordSets: any = {
    electrum: {
        prefixLength: 0,
        words: [
            'like', 'just', 'love', 'know', 'never', 'want', 'time', 'out', 'there',
            'make', 'look', 'eye', 'down', 'only', 'think', 'heart', 'back', 'then',
            'into', 'about', 'more', 'away', 'still', 'them', 'take', 'thing', 'even',
            'through', 'long', 'always', 'world', 'too', 'friend', 'tell', 'try',
            'hand', 'thought', 'over', 'here', 'other', 'need', 'smile', 'again',
            'much', 'cry', 'been', 'night', 'ever', 'little', 'said', 'end', 'some',
            'those', 'around', 'mind', 'people', 'girl', 'leave', 'dream', 'left',
            'turn', 'myself', 'give', 'nothing', 'really', 'off', 'before',
            'something', 'find', 'walk', 'wish', 'good', 'once', 'place', 'ask',
            'stop', 'keep', 'watch', 'seem', 'everything', 'wait', 'got', 'yet',
            'made', 'remember', 'start', 'alone', 'run', 'hope', 'maybe', 'believe',
            'body', 'hate', 'after', 'close', 'talk', 'stand', 'own', 'each', 'hurt',
            'help', 'home', 'god', 'soul', 'new', 'many', 'two', 'inside', 'should',
            'true', 'first', 'fear', 'mean', 'better', 'play', 'another', 'gone',
            'change', 'use', 'wonder', 'someone', 'hair', 'cold', 'open', 'best',
            'any', 'behind', 'happen', 'water', 'dark', 'laugh', 'stay', 'forever',
            'name', 'work', 'show', 'sky', 'break', 'came', 'deep', 'door', 'put',
            'black', 'together', 'upon', 'happy', 'such', 'great', 'white', 'matter',
            'fill', 'past', 'please', 'burn', 'cause', 'enough', 'touch', 'moment',
            'soon', 'voice', 'scream', 'anything', 'stare', 'sound', 'red', 'everyone',
            'hide', 'kiss', 'truth', 'death', 'beautiful', 'mine', 'blood', 'broken',
            'very', 'pass', 'next', 'forget', 'tree', 'wrong', 'air', 'mother',
            'understand', 'lip', 'hit', 'wall', 'memory', 'sleep', 'free', 'high',
            'realize', 'school', 'might', 'skin', 'sweet', 'perfect', 'blue', 'kill',
            'breath', 'dance', 'against', 'fly', 'between', 'grow', 'strong', 'under',
            'listen', 'bring', 'sometimes', 'speak', 'pull', 'person', 'become',
            'family', 'begin', 'ground', 'real', 'small', 'father', 'sure', 'feet',
            'rest', 'young', 'finally', 'land', 'across', 'today', 'different', 'guy',
            'line', 'fire', 'reason', 'reach', 'second', 'slowly', 'write', 'eat',
            'smell', 'mouth', 'step', 'learn', 'three', 'floor', 'promise', 'breathe',
            'darkness', 'push', 'earth', 'guess', 'save', 'song', 'above', 'along',
            'both', 'color', 'house', 'almost', 'sorry', 'anymore', 'brother', 'okay',
            'dear', 'game', 'fade', 'already', 'apart', 'warm', 'beauty', 'heard',
            'notice', 'question', 'shine', 'began', 'piece', 'whole', 'shadow',
            'secret', 'street', 'within', 'finger', 'point', 'morning', 'whisper',
            'child', 'moon', 'green', 'story', 'glass', 'kid', 'silence', 'since',
            'soft', 'yourself', 'empty', 'shall', 'angel', 'answer', 'baby', 'bright',
            'dad', 'path', 'worry', 'hour', 'drop', 'follow', 'power', 'war', 'half',
            'flow', 'heaven', 'act', 'chance', 'fact', 'least', 'tired', 'children',
            'near', 'quite', 'afraid', 'rise', 'sea', 'taste', 'window', 'cover',
            'nice', 'trust', 'lot', 'sad', 'cool', 'force', 'peace', 'return', 'blind',
            'easy', 'ready', 'roll', 'rose', 'drive', 'held', 'music', 'beneath',
            'hang', 'mom', 'paint', 'emotion', 'quiet', 'clear', 'cloud', 'few',
            'pretty', 'bird', 'outside', 'paper', 'picture', 'front', 'rock', 'simple',
            'anyone', 'meant', 'reality', 'road', 'sense', 'waste', 'bit', 'leaf',
            'thank', 'happiness', 'meet', 'men', 'smoke', 'truly', 'decide', 'self',
            'age', 'book', 'form', 'alive', 'carry', 'escape', 'damn', 'instead',
            'able', 'ice', 'minute', 'throw', 'catch', 'leg', 'ring', 'course',
            'goodbye', 'lead', 'poem', 'sick', 'corner', 'desire', 'known', 'problem',
            'remind', 'shoulder', 'suppose', 'toward', 'wave', 'drink', 'jump',
            'woman', 'pretend', 'sister', 'week', 'human', 'joy', 'crack', 'grey',
            'pray', 'surprise', 'dry', 'knee', 'less', 'search', 'bleed', 'caught',
            'clean', 'embrace', 'future', 'king', 'son', 'sorrow', 'chest', 'hug',
            'remain', 'sat', 'worth', 'blow', 'daddy', 'final', 'parent', 'tight',
            'also', 'create', 'lonely', 'safe', 'cross', 'dress', 'evil', 'silent',
            'bone', 'fate', 'perhaps', 'anger', 'class', 'scar', 'snow', 'tiny',
            'tonight', 'continue', 'control', 'dog', 'edge', 'mirror', 'month',
            'suddenly', 'comfort', 'given', 'loud', 'quickly', 'gaze', 'plan', 'rush',
            'stone', 'town', 'battle', 'ignore', 'spirit', 'stood', 'stupid', 'yours',
            'brown', 'build', 'dust', 'hey', 'kept', 'pay', 'phone', 'twist',
            'although', 'ball', 'beyond', 'hidden', 'nose', 'taken', 'fail', 'float',
            'pure', 'somehow', 'wash', 'wrap', 'angry', 'cheek', 'creature',
            'forgotten', 'heat', 'rip', 'single', 'space', 'special', 'weak',
            'whatever', 'yell', 'anyway', 'blame', 'job', 'choose', 'country', 'curse',
            'drift', 'echo', 'figure', 'grew', 'laughter', 'neck', 'suffer', 'worse',
            'yeah', 'disappear', 'foot', 'forward', 'knife', 'mess', 'somewhere',
            'stomach', 'storm', 'beg', 'idea', 'lift', 'offer', 'breeze', 'field',
            'five', 'often', 'simply', 'stuck', 'win', 'allow', 'confuse', 'enjoy',
            'except', 'flower', 'seek', 'strength', 'calm', 'grin', 'gun', 'heavy',
            'hill', 'large', 'ocean', 'shoe', 'sigh', 'straight', 'summer', 'tongue',
            'accept', 'crazy', 'everyday', 'exist', 'grass', 'mistake', 'sent', 'shut',
            'surround', 'table', 'ache', 'brain', 'destroy', 'heal', 'nature', 'shout',
            'sign', 'stain', 'choice', 'doubt', 'glance', 'glow', 'mountain', 'queen',
            'stranger', 'throat', 'tomorrow', 'city', 'either', 'fish', 'flame',
            'rather', 'shape', 'spin', 'spread', 'ash', 'distance', 'finish', 'image',
            'imagine', 'important', 'nobody', 'shatter', 'warmth', 'became', 'feed',
            'flesh', 'funny', 'lust', 'shirt', 'trouble', 'yellow', 'attention',
            'bare', 'bite', 'money', 'protect', 'amaze', 'appear', 'born', 'choke',
            'completely', 'daughter', 'fresh', 'friendship', 'gentle', 'probably',
            'six', 'deserve', 'expect', 'grab', 'middle', 'nightmare', 'river',
            'thousand', 'weight', 'worst', 'wound', 'barely', 'bottle', 'cream',
            'regret', 'relationship', 'stick', 'test', 'crush', 'endless', 'fault',
            'itself', 'rule', 'spill', 'art', 'circle', 'join', 'kick', 'mask',
            'master', 'passion', 'quick', 'raise', 'smooth', 'unless', 'wander',
            'actually', 'broke', 'chair', 'deal', 'favorite', 'gift', 'note', 'number',
            'sweat', 'box', 'chill', 'clothes', 'lady', 'mark', 'park', 'poor',
            'sadness', 'tie', 'animal', 'belong', 'brush', 'consume', 'dawn', 'forest',
            'innocent', 'pen', 'pride', 'stream', 'thick', 'clay', 'complete', 'count',
            'draw', 'faith', 'press', 'silver', 'struggle', 'surface', 'taught',
            'teach', 'wet', 'bless', 'chase', 'climb', 'enter', 'letter', 'melt',
            'metal', 'movie', 'stretch', 'swing', 'vision', 'wife', 'beside', 'crash',
            'forgot', 'guide', 'haunt', 'joke', 'knock', 'plant', 'pour', 'prove',
            'reveal', 'steal', 'stuff', 'trip', 'wood', 'wrist', 'bother', 'bottom',
            'crawl', 'crowd', 'fix', 'forgive', 'frown', 'grace', 'loose', 'lucky',
            'party', 'release', 'surely', 'survive', 'teacher', 'gently', 'grip',
            'speed', 'suicide', 'travel', 'treat', 'vein', 'written', 'cage', 'chain',
            'conversation', 'date', 'enemy', 'however', 'interest', 'million', 'page',
            'pink', 'proud', 'sway', 'themselves', 'winter', 'church', 'cruel', 'cup',
            'demon', 'experience', 'freedom', 'pair', 'pop', 'purpose', 'respect',
            'shoot', 'softly', 'state', 'strange', 'bar', 'birth', 'curl', 'dirt',
            'excuse', 'lord', 'lovely', 'monster', 'order', 'pack', 'pants', 'pool',
            'scene', 'seven', 'shame', 'slide', 'ugly', 'among', 'blade', 'blonde',
            'closet', 'creek', 'deny', 'drug', 'eternity', 'gain', 'grade', 'handle',
            'key', 'linger', 'pale', 'prepare', 'swallow', 'swim', 'tremble', 'wheel',
            'won', 'cast', 'cigarette', 'claim', 'college', 'direction', 'dirty',
            'gather', 'ghost', 'hundred', 'loss', 'lung', 'orange', 'present', 'swear',
            'swirl', 'twice', 'wild', 'bitter', 'blanket', 'doctor', 'everywhere',
            'flash', 'grown', 'knowledge', 'numb', 'pressure', 'radio', 'repeat',
            'ruin', 'spend', 'unknown', 'buy', 'clock', 'devil', 'early', 'false',
            'fantasy', 'pound', 'precious', 'refuse', 'sheet', 'teeth', 'welcome',
            'add', 'ahead', 'block', 'bury', 'caress', 'content', 'depth', 'despite',
            'distant', 'marry', 'purple', 'threw', 'whenever', 'bomb', 'dull',
            'easily', 'grasp', 'hospital', 'innocence', 'normal', 'receive', 'reply',
            'rhyme', 'shade', 'someday', 'sword', 'toe', 'visit', 'asleep', 'bought',
            'center', 'consider', 'flat', 'hero', 'history', 'ink', 'insane', 'muscle',
            'mystery', 'pocket', 'reflection', 'shove', 'silently', 'smart', 'soldier',
            'spot', 'stress', 'train', 'type', 'view', 'whether', 'bus', 'energy',
            'explain', 'holy', 'hunger', 'inch', 'magic', 'mix', 'noise', 'nowhere',
            'prayer', 'presence', 'shock', 'snap', 'spider', 'study', 'thunder',
            'trail', 'admit', 'agree', 'bag', 'bang', 'bound', 'butterfly', 'cute',
            'exactly', 'explode', 'familiar', 'fold', 'further', 'pierce', 'reflect',
            'scent', 'selfish', 'sharp', 'sink', 'spring', 'stumble', 'universe',
            'weep', 'women', 'wonderful', 'action', 'ancient', 'attempt', 'avoid',
            'birthday', 'branch', 'chocolate', 'core', 'depress', 'drunk',
            'especially', 'focus', 'fruit', 'honest', 'match', 'palm', 'perfectly',
            'pillow', 'pity', 'poison', 'roar', 'shift', 'slightly', 'thump', 'truck',
            'tune', 'twenty', 'unable', 'wipe', 'wrote', 'coat', 'constant', 'dinner',
            'drove', 'egg', 'eternal', 'flight', 'flood', 'frame', 'freak', 'gasp',
            'glad', 'hollow', 'motion', 'peer', 'plastic', 'root', 'screen', 'season',
            'sting', 'strike', 'team', 'unlike', 'victim', 'volume', 'warn', 'weird',
            'attack', 'await', 'awake', 'built', 'charm', 'crave', 'despair', 'fought',
            'grant', 'grief', 'horse', 'limit', 'message', 'ripple', 'sanity',
            'scatter', 'serve', 'split', 'string', 'trick', 'annoy', 'blur', 'boat',
            'brave', 'clearly', 'cling', 'connect', 'fist', 'forth', 'imagination',
            'iron', 'jock', 'judge', 'lesson', 'milk', 'misery', 'nail', 'naked',
            'ourselves', 'poet', 'possible', 'princess', 'sail', 'size', 'snake',
            'society', 'stroke', 'torture', 'toss', 'trace', 'wise', 'bloom', 'bullet',
            'cell', 'check', 'cost', 'darling', 'during', 'footstep', 'fragile',
            'hallway', 'hardly', 'horizon', 'invisible', 'journey', 'midnight', 'mud',
            'nod', 'pause', 'relax', 'shiver', 'sudden', 'value', 'youth', 'abuse',
            'admire', 'blink', 'breast', 'bruise', 'constantly', 'couple', 'creep',
            'curve', 'difference', 'dumb', 'emptiness', 'gotta', 'honor', 'plain',
            'planet', 'recall', 'rub', 'ship', 'slam', 'soar', 'somebody', 'tightly',
            'weather', 'adore', 'approach', 'bond', 'bread', 'burst', 'candle',
            'coffee', 'cousin', 'crime', 'desert', 'flutter', 'frozen', 'grand',
            'heel', 'hello', 'language', 'level', 'movement', 'pleasure', 'powerful',
            'random', 'rhythm', 'settle', 'silly', 'slap', 'sort', 'spoken', 'steel',
            'threaten', 'tumble', 'upset', 'aside', 'awkward', 'bee', 'blank', 'board',
            'button', 'card', 'carefully', 'complain', 'crap', 'deeply', 'discover',
            'drag', 'dread', 'effort', 'entire', 'fairy', 'giant', 'gotten', 'greet',
            'illusion', 'jeans', 'leap', 'liquid', 'march', 'mend', 'nervous', 'nine',
            'replace', 'rope', 'spine', 'stole', 'terror', 'accident', 'apple',
            'balance', 'boom', 'childhood', 'collect', 'demand', 'depression',
            'eventually', 'faint', 'glare', 'goal', 'group', 'honey', 'kitchen',
            'laid', 'limb', 'machine', 'mere', 'mold', 'murder', 'nerve', 'painful',
            'poetry', 'prince', 'rabbit', 'shelter', 'shore', 'shower', 'soothe',
            'stair', 'steady', 'sunlight', 'tangle', 'tease', 'treasure', 'uncle',
            'begun', 'bliss', 'canvas', 'cheer', 'claw', 'clutch', 'commit', 'crimson',
            'crystal', 'delight', 'doll', 'existence', 'express', 'fog', 'football',
            'gay', 'goose', 'guard', 'hatred', 'illuminate', 'mass', 'math', 'mourn',
            'rich', 'rough', 'skip', 'stir', 'student', 'style', 'support', 'thorn',
            'tough', 'yard', 'yearn', 'yesterday', 'advice', 'appreciate', 'autumn',
            'bank', 'beam', 'bowl', 'capture', 'carve', 'collapse', 'confusion',
            'creation', 'dove', 'feather', 'girlfriend', 'glory', 'government',
            'harsh', 'hop', 'inner', 'loser', 'moonlight', 'neighbor', 'neither',
            'peach', 'pig', 'praise', 'screw', 'shield', 'shimmer', 'sneak', 'stab',
            'subject', 'throughout', 'thrown', 'tower', 'twirl', 'wow', 'army',
            'arrive', 'bathroom', 'bump', 'cease', 'cookie', 'couch', 'courage', 'dim',
            'guilt', 'howl', 'hum', 'husband', 'insult', 'led', 'lunch', 'mock',
            'mostly', 'natural', 'nearly', 'needle', 'nerd', 'peaceful', 'perfection',
            'pile', 'price', 'remove', 'roam', 'sanctuary', 'serious', 'shiny',
            'shook', 'sob', 'stolen', 'tap', 'vain', 'void', 'warrior', 'wrinkle',
            'affection', 'apologize', 'blossom', 'bounce', 'bridge', 'cheap',
            'crumble', 'decision', 'descend', 'desperately', 'dig', 'dot', 'flip',
            'frighten', 'heartbeat', 'huge', 'lazy', 'lick', 'odd', 'opinion',
            'process', 'puzzle', 'quietly', 'retreat', 'score', 'sentence', 'separate',
            'situation', 'skill', 'soak', 'square', 'stray', 'taint', 'task', 'tide',
            'underneath', 'veil', 'whistle', 'anywhere', 'bedroom', 'bid', 'bloody',
            'burden', 'careful', 'compare', 'concern', 'curtain', 'decay', 'defeat',
            'describe', 'double', 'dreamer', 'driver', 'dwell', 'evening', 'flare',
            'flicker', 'grandma', 'guitar', 'harm', 'horrible', 'hungry', 'indeed',
            'lace', 'melody', 'monkey', 'nation', 'object', 'obviously', 'rainbow',
            'salt', 'scratch', 'shown', 'shy', 'stage', 'stun', 'third', 'tickle',
            'useless', 'weakness', 'worship', 'worthless', 'afternoon', 'beard',
            'boyfriend', 'bubble', 'busy', 'certain', 'chin', 'concrete', 'desk',
            'diamond', 'doom', 'drawn', 'due', 'felicity', 'freeze', 'frost', 'garden',
            'glide', 'harmony', 'hopefully', 'hunt', 'jealous', 'lightning', 'mama',
            'mercy', 'peel', 'physical', 'position', 'pulse', 'punch', 'quit', 'rant',
            'respond', 'salty', 'sane', 'satisfy', 'savior', 'sheep', 'slept',
            'social', 'sport', 'tuck', 'utter', 'valley', 'wolf', 'aim', 'alas',
            'alter', 'arrow', 'awaken', 'beaten', 'belief', 'brand', 'ceiling',
            'cheese', 'clue', 'confidence', 'connection', 'daily', 'disguise', 'eager',
            'erase', 'essence', 'everytime', 'expression', 'fan', 'flag', 'flirt',
            'foul', 'fur', 'giggle', 'glorious', 'ignorance', 'law', 'lifeless',
            'measure', 'mighty', 'muse', 'north', 'opposite', 'paradise', 'patience',
            'patient', 'pencil', 'petal', 'plate', 'ponder', 'possibly', 'practice',
            'slice', 'spell', 'stock', 'strife', 'strip', 'suffocate', 'suit',
            'tender', 'tool', 'trade', 'velvet', 'verse', 'waist', 'witch', 'aunt',
            'bench', 'bold', 'cap', 'certainly', 'click', 'companion', 'creator',
            'dart', 'delicate', 'determine', 'dish', 'dragon', 'drama', 'drum', 'dude',
            'everybody', 'feast', 'forehead', 'former', 'fright', 'fully', 'gas',
            'hook', 'hurl', 'invite', 'juice', 'manage', 'moral', 'possess', 'raw',
            'rebel', 'royal', 'scale', 'scary', 'several', 'slight', 'stubborn',
            'swell', 'talent', 'tea', 'terrible', 'thread', 'torment', 'trickle',
            'usually', 'vast', 'violence', 'weave', 'acid', 'agony', 'ashamed', 'awe',
            'belly', 'blend', 'blush', 'character', 'cheat', 'common', 'company',
            'coward', 'creak', 'danger', 'deadly', 'defense', 'define', 'depend',
            'desperate', 'destination', 'dew', 'duck', 'dusty', 'embarrass', 'engine',
            'example', 'explore', 'foe', 'freely', 'frustrate', 'generation', 'glove',
            'guilty', 'health', 'hurry', 'idiot', 'impossible', 'inhale', 'jaw',
            'kingdom', 'mention', 'mist', 'moan', 'mumble', 'mutter', 'observe', 'ode',
            'pathetic', 'pattern', 'pie', 'prefer', 'puff', 'rape', 'rare', 'revenge',
            'rude', 'scrape', 'spiral', 'squeeze', 'strain', 'sunset', 'suspend',
            'sympathy', 'thigh', 'throne', 'total', 'unseen', 'weapon', 'weary'
        ]
    },
    english: {
        prefixLength: 3,
        words: [
            'abbey', 'abducts', 'ability', 'ablaze', 'abnormal', 'abort', 'abrasive', 'absorb',
            'abyss', 'academy', 'aces', 'aching', 'acidic', 'acoustic', 'acquire', 'across',
            'actress', 'acumen', 'adapt', 'addicted', 'adept', 'adhesive', 'adjust', 'adopt',
            'adrenalin', 'adult', 'adventure', 'aerial', 'afar', 'affair', 'afield', 'afloat',
            'afoot', 'afraid', 'after', 'against', 'agenda', 'aggravate', 'agile', 'aglow',
            'agnostic', 'agony', 'agreed', 'ahead', 'aided', 'ailments', 'aimless', 'airport',
            'aisle', 'ajar', 'akin', 'alarms', 'album', 'alchemy', 'alerts', 'algebra',
            'alkaline', 'alley', 'almost', 'aloof', 'alpine', 'already', 'also', 'altitude',
            'alumni', 'always', 'amaze', 'ambush', 'amended', 'amidst', 'ammo', 'amnesty',
            'among', 'amply', 'amused', 'anchor', 'android', 'anecdote', 'angled', 'ankle',
            'annoyed', 'answers', 'antics', 'anvil', 'anxiety', 'anybody', 'apart', 'apex',
            'aphid', 'aplomb', 'apology', 'apply', 'apricot', 'aptitude', 'aquarium', 'arbitrary',
            'archer', 'ardent', 'arena', 'argue', 'arises', 'army', 'around', 'arrow',
            'arsenic', 'artistic', 'ascend', 'ashtray', 'aside', 'asked', 'asleep', 'aspire',
            'assorted', 'asylum', 'athlete', 'atlas', 'atom', 'atrium', 'attire', 'auburn',
            'auctions', 'audio', 'august', 'aunt', 'austere', 'autumn', 'avatar', 'avidly',
            'avoid', 'awakened', 'awesome', 'awful', 'awkward', 'awning', 'awoken', 'axes',
            'axis', 'axle', 'aztec', 'azure', 'baby', 'bacon', 'badge', 'baffles',
            'bagpipe', 'bailed', 'bakery', 'balding', 'bamboo', 'banjo', 'baptism', 'basin',
            'batch', 'bawled', 'bays', 'because', 'beer', 'befit', 'begun', 'behind',
            'being', 'below', 'bemused', 'benches', 'berries', 'bested', 'betting', 'bevel',
            'beware', 'beyond', 'bias', 'bicycle', 'bids', 'bifocals', 'biggest', 'bikini',
            'bimonthly', 'binocular', 'biology', 'biplane', 'birth', 'biscuit', 'bite', 'biweekly',
            'blender', 'blip', 'bluntly', 'boat', 'bobsled', 'bodies', 'bogeys', 'boil',
            'boldly', 'bomb', 'border', 'boss', 'both', 'bounced', 'bovine', 'bowling',
            'boxes', 'boyfriend', 'broken', 'brunt', 'bubble', 'buckets', 'budget', 'buffet',
            'bugs', 'building', 'bulb', 'bumper', 'bunch', 'business', 'butter', 'buying',
            'buzzer', 'bygones', 'byline', 'bypass', 'cabin', 'cactus', 'cadets', 'cafe',
            'cage', 'cajun', 'cake', 'calamity', 'camp', 'candy', 'casket', 'catch',
            'cause', 'cavernous', 'cease', 'cedar', 'ceiling', 'cell', 'cement', 'cent',
            'certain', 'chlorine', 'chrome', 'cider', 'cigar', 'cinema', 'circle', 'cistern',
            'citadel', 'civilian', 'claim', 'click', 'clue', 'coal', 'cobra', 'cocoa',
            'code', 'coexist', 'coffee', 'cogs', 'cohesive', 'coils', 'colony', 'comb',
            'cool', 'copy', 'corrode', 'costume', 'cottage', 'cousin', 'cowl', 'criminal',
            'cube', 'cucumber', 'cuddled', 'cuffs', 'cuisine', 'cunning', 'cupcake', 'custom',
            'cycling', 'cylinder', 'cynical', 'dabbing', 'dads', 'daft', 'dagger', 'daily',
            'damp', 'dangerous', 'dapper', 'darted', 'dash', 'dating', 'dauntless', 'dawn',
            'daytime', 'dazed', 'debut', 'decay', 'dedicated', 'deepest', 'deftly', 'degrees',
            'dehydrate', 'deity', 'dejected', 'delayed', 'demonstrate', 'dented', 'deodorant', 'depth',
            'desk', 'devoid', 'dewdrop', 'dexterity', 'dialect', 'dice', 'diet', 'different',
            'digit', 'dilute', 'dime', 'dinner', 'diode', 'diplomat', 'directed', 'distance',
            'ditch', 'divers', 'dizzy', 'doctor', 'dodge', 'does', 'dogs', 'doing',
            'dolphin', 'domestic', 'donuts', 'doorway', 'dormant', 'dosage', 'dotted', 'double',
            'dove', 'down', 'dozen', 'dreams', 'drinks', 'drowning', 'drunk', 'drying',
            'dual', 'dubbed', 'duckling', 'dude', 'duets', 'duke', 'dullness', 'dummy',
            'dunes', 'duplex', 'duration', 'dusted', 'duties', 'dwarf', 'dwelt', 'dwindling',
            'dying', 'dynamite', 'dyslexic', 'each', 'eagle', 'earth', 'easy', 'eating',
            'eavesdrop', 'eccentric', 'echo', 'eclipse', 'economics', 'ecstatic', 'eden', 'edgy',
            'edited', 'educated', 'eels', 'efficient', 'eggs', 'egotistic', 'eight', 'either',
            'eject', 'elapse', 'elbow', 'eldest', 'eleven', 'elite', 'elope', 'else',
            'eluded', 'emails', 'ember', 'emerge', 'emit', 'emotion', 'empty', 'emulate',
            'energy', 'enforce', 'enhanced', 'enigma', 'enjoy', 'enlist', 'enmity', 'enough',
            'enraged', 'ensign', 'entrance', 'envy', 'epoxy', 'equip', 'erase', 'erected',
            'erosion', 'error', 'eskimos', 'espionage', 'essential', 'estate', 'etched', 'eternal',
            'ethics', 'etiquette', 'evaluate', 'evenings', 'evicted', 'evolved', 'examine', 'excess',
            'exhale', 'exit', 'exotic', 'exquisite', 'extra', 'exult', 'fabrics', 'factual',
            'fading', 'fainted', 'faked', 'fall', 'family', 'fancy', 'farming', 'fatal',
            'faulty', 'fawns', 'faxed', 'fazed', 'feast', 'february', 'federal', 'feel',
            'feline', 'females', 'fences', 'ferry', 'festival', 'fetches', 'fever', 'fewest',
            'fiat', 'fibula', 'fictional', 'fidget', 'fierce', 'fifteen', 'fight', 'films',
            'firm', 'fishing', 'fitting', 'five', 'fixate', 'fizzle', 'fleet', 'flippant',
            'flying', 'foamy', 'focus', 'foes', 'foggy', 'foiled', 'folding', 'fonts',
            'foolish', 'fossil', 'fountain', 'fowls', 'foxes', 'foyer', 'framed', 'friendly',
            'frown', 'fruit', 'frying', 'fudge', 'fuel', 'fugitive', 'fully', 'fuming',
            'fungal', 'furnished', 'fuselage', 'future', 'fuzzy', 'gables', 'gadget', 'gags',
            'gained', 'galaxy', 'gambit', 'gang', 'gasp', 'gather', 'gauze', 'gave',
            'gawk', 'gaze', 'gearbox', 'gecko', 'geek', 'gels', 'gemstone', 'general',
            'geometry', 'germs', 'gesture', 'getting', 'geyser', 'ghetto', 'ghost', 'giant',
            'giddy', 'gifts', 'gigantic', 'gills', 'gimmick', 'ginger', 'girth', 'giving',
            'glass', 'gleeful', 'glide', 'gnaw', 'gnome', 'goat', 'goblet', 'godfather',
            'goes', 'goggles', 'going', 'goldfish', 'gone', 'goodbye', 'gopher', 'gorilla',
            'gossip', 'gotten', 'gourmet', 'governing', 'gown', 'greater', 'grunt', 'guarded',
            'guest', 'guide', 'gulp', 'gumball', 'guru', 'gusts', 'gutter', 'guys',
            'gymnast', 'gypsy', 'gyrate', 'habitat', 'hacksaw', 'haggled', 'hairy', 'hamburger',
            'happens', 'hashing', 'hatchet', 'haunted', 'having', 'hawk', 'haystack', 'hazard',
            'hectare', 'hedgehog', 'heels', 'hefty', 'height', 'hemlock', 'hence', 'heron',
            'hesitate', 'hexagon', 'hickory', 'hiding', 'highway', 'hijack', 'hiker', 'hills',
            'himself', 'hinder', 'hippo', 'hire', 'history', 'hitched', 'hive', 'hoax',
            'hobby', 'hockey', 'hoisting', 'hold', 'honked', 'hookup', 'hope', 'hornet',
            'hospital', 'hotel', 'hounded', 'hover', 'howls', 'hubcaps', 'huddle', 'huge',
            'hull', 'humid', 'hunter', 'hurried', 'husband', 'huts', 'hybrid', 'hydrogen',
            'hyper', 'iceberg', 'icing', 'icon', 'identity', 'idiom', 'idled', 'idols',
            'igloo', 'ignore', 'iguana', 'illness', 'imagine', 'imbalance', 'imitate', 'impel',
            'inactive', 'inbound', 'incur', 'industrial', 'inexact', 'inflamed', 'ingested', 'initiate',
            'injury', 'inkling', 'inline', 'inmate', 'innocent', 'inorganic', 'input', 'inquest',
            'inroads', 'insult', 'intended', 'inundate', 'invoke', 'inwardly', 'ionic', 'irate',
            'iris', 'irony', 'irritate', 'island', 'isolated', 'issued', 'italics', 'itches',
            'items', 'itinerary', 'itself', 'ivory', 'jabbed', 'jackets', 'jaded', 'jagged',
            'jailed', 'jamming', 'january', 'jargon', 'jaunt', 'javelin', 'jaws', 'jazz',
            'jeans', 'jeers', 'jellyfish', 'jeopardy', 'jerseys', 'jester', 'jetting', 'jewels',
            'jigsaw', 'jingle', 'jittery', 'jive', 'jobs', 'jockey', 'jogger', 'joining',
            'joking', 'jolted', 'jostle', 'journal', 'joyous', 'jubilee', 'judge', 'juggled',
            'juicy', 'jukebox', 'july', 'jump', 'junk', 'jury', 'justice', 'juvenile',
            'kangaroo', 'karate', 'keep', 'kennel', 'kept', 'kernels', 'kettle', 'keyboard',
            'kickoff', 'kidneys', 'king', 'kiosk', 'kisses', 'kitchens', 'kiwi', 'knapsack',
            'knee', 'knife', 'knowledge', 'knuckle', 'koala', 'laboratory', 'ladder', 'lagoon',
            'lair', 'lakes', 'lamb', 'language', 'laptop', 'large', 'last', 'later',
            'launching', 'lava', 'lawsuit', 'layout', 'lazy', 'lectures', 'ledge', 'leech',
            'left', 'legion', 'leisure', 'lemon', 'lending', 'leopard', 'lesson', 'lettuce',
            'lexicon', 'liar', 'library', 'licks', 'lids', 'lied', 'lifestyle', 'light',
            'likewise', 'lilac', 'limits', 'linen', 'lion', 'lipstick', 'liquid', 'listen',
            'lively', 'loaded', 'lobster', 'locker', 'lodge', 'lofty', 'logic', 'loincloth',
            'long', 'looking', 'lopped', 'lordship', 'losing', 'lottery', 'loudly', 'love',
            'lower', 'loyal', 'lucky', 'luggage', 'lukewarm', 'lullaby', 'lumber', 'lunar',
            'lurk', 'lush', 'luxury', 'lymph', 'lynx', 'lyrics', 'macro', 'madness',
            'magically', 'mailed', 'major', 'makeup', 'malady', 'mammal', 'maps', 'masterful',
            'match', 'maul', 'maverick', 'maximum', 'mayor', 'maze', 'meant', 'mechanic',
            'medicate', 'meeting', 'megabyte', 'melting', 'memoir', 'menu', 'merger', 'mesh',
            'metro', 'mews', 'mice', 'midst', 'mighty', 'mime', 'mirror', 'misery',
            'mittens', 'mixture', 'moat', 'mobile', 'mocked', 'mohawk', 'moisture', 'molten',
            'moment', 'money', 'moon', 'mops', 'morsel', 'mostly', 'motherly', 'mouth',
            'movement', 'mowing', 'much', 'muddy', 'muffin', 'mugged', 'mullet', 'mumble',
            'mundane', 'muppet', 'mural', 'musical', 'muzzle', 'myriad', 'mystery', 'myth',
            'nabbing', 'nagged', 'nail', 'names', 'nanny', 'napkin', 'narrate', 'nasty',
            'natural', 'nautical', 'navy', 'nearby', 'necklace', 'needed', 'negative', 'neither',
            'neon', 'nephew', 'nerves', 'nestle', 'network', 'neutral', 'never', 'newt',
            'nexus', 'nibs', 'niche', 'niece', 'nifty', 'nightly', 'nimbly', 'nineteen',
            'nirvana', 'nitrogen', 'nobody', 'nocturnal', 'nodes', 'noises', 'nomad', 'noodles',
            'northern', 'nostril', 'noted', 'nouns', 'novelty', 'nowhere', 'nozzle', 'nuance',
            'nucleus', 'nudged', 'nugget', 'nuisance', 'null', 'number', 'nuns', 'nurse',
            'nutshell', 'nylon', 'oaks', 'oars', 'oasis', 'oatmeal', 'obedient', 'object',
            'obliged', 'obnoxious', 'observant', 'obtains', 'obvious', 'occur', 'ocean', 'october',
            'odds', 'odometer', 'offend', 'often', 'oilfield', 'ointment', 'okay', 'older',
            'olive', 'olympics', 'omega', 'omission', 'omnibus', 'onboard', 'oncoming', 'oneself',
            'ongoing', 'onion', 'online', 'onslaught', 'onto', 'onward', 'oozed', 'opacity',
            'opened', 'opposite', 'optical', 'opus', 'orange', 'orbit', 'orchid', 'orders',
            'organs', 'origin', 'ornament', 'orphans', 'oscar', 'ostrich', 'otherwise', 'otter',
            'ouch', 'ought', 'ounce', 'ourselves', 'oust', 'outbreak', 'oval', 'oven',
            'owed', 'owls', 'owner', 'oxidant', 'oxygen', 'oyster', 'ozone', 'pact',
            'paddles', 'pager', 'pairing', 'palace', 'pamphlet', 'pancakes', 'paper', 'paradise',
            'pastry', 'patio', 'pause', 'pavements', 'pawnshop', 'payment', 'peaches', 'pebbles',
            'peculiar', 'pedantic', 'peeled', 'pegs', 'pelican', 'pencil', 'people', 'pepper',
            'perfect', 'pests', 'petals', 'phase', 'pheasants', 'phone', 'phrases', 'physics',
            'piano', 'picked', 'pierce', 'pigment', 'piloted', 'pimple', 'pinched', 'pioneer',
            'pipeline', 'pirate', 'pistons', 'pitched', 'pivot', 'pixels', 'pizza', 'playful',
            'pledge', 'pliers', 'plotting', 'plus', 'plywood', 'poaching', 'pockets', 'podcast',
            'poetry', 'point', 'poker', 'polar', 'ponies', 'pool', 'popular', 'portents',
            'possible', 'potato', 'pouch', 'poverty', 'powder', 'pram', 'present', 'pride',
            'problems', 'pruned', 'prying', 'psychic', 'public', 'puck', 'puddle', 'puffin',
            'pulp', 'pumpkins', 'punch', 'puppy', 'purged', 'push', 'putty', 'puzzled',
            'pylons', 'pyramid', 'python', 'queen', 'quick', 'quote', 'rabbits', 'racetrack',
            'radar', 'rafts', 'rage', 'railway', 'raking', 'rally', 'ramped', 'randomly',
            'rapid', 'rarest', 'rash', 'rated', 'ravine', 'rays', 'razor', 'react',
            'rebel', 'recipe', 'reduce', 'reef', 'refer', 'regular', 'reheat', 'reinvest',
            'rejoices', 'rekindle', 'relic', 'remedy', 'renting', 'reorder', 'repent', 'request',
            'reruns', 'rest', 'return', 'reunion', 'revamp', 'rewind', 'rhino', 'rhythm',
            'ribbon', 'richly', 'ridges', 'rift', 'rigid', 'rims', 'ringing', 'riots',
            'ripped', 'rising', 'ritual', 'river', 'roared', 'robot', 'rockets', 'rodent',
            'rogue', 'roles', 'romance', 'roomy', 'roped', 'roster', 'rotate', 'rounded',
            'rover', 'rowboat', 'royal', 'ruby', 'rudely', 'ruffled', 'rugged', 'ruined',
            'ruling', 'rumble', 'runway', 'rural', 'rustled', 'ruthless', 'sabotage', 'sack',
            'sadness', 'safety', 'saga', 'sailor', 'sake', 'salads', 'sample', 'sanity',
            'sapling', 'sarcasm', 'sash', 'satin', 'saucepan', 'saved', 'sawmill', 'saxophone',
            'sayings', 'scamper', 'scenic', 'school', 'science', 'scoop', 'scrub', 'scuba',
            'seasons', 'second', 'sedan', 'seeded', 'segments', 'seismic', 'selfish', 'semifinal',
            'sensible', 'september', 'sequence', 'serving', 'session', 'setup', 'seventh', 'sewage',
            'shackles', 'shelter', 'shipped', 'shocking', 'shrugged', 'shuffled', 'shyness', 'siblings',
            'sickness', 'sidekick', 'sieve', 'sifting', 'sighting', 'silk', 'simplest', 'sincerely',
            'sipped', 'siren', 'situated', 'sixteen', 'sizes', 'skater', 'skew', 'skirting',
            'skulls', 'skydive', 'slackens', 'sleepless', 'slid', 'slower', 'slug', 'smash',
            'smelting', 'smidgen', 'smog', 'smuggled', 'snake', 'sneeze', 'sniff', 'snout',
            'snug', 'soapy', 'sober', 'soccer', 'soda', 'software', 'soggy', 'soil',
            'solved', 'somewhere', 'sonic', 'soothe', 'soprano', 'sorry', 'southern', 'sovereign',
            'sowed', 'soya', 'space', 'speedy', 'sphere', 'spiders', 'splendid', 'spout',
            'sprig', 'spud', 'spying', 'square', 'stacking', 'stellar', 'stick', 'stockpile',
            'strained', 'stunning', 'stylishly', 'subtly', 'succeed', 'suddenly', 'suede', 'suffice',
            'sugar', 'suitcase', 'sulking', 'summon', 'sunken', 'superior', 'surfer', 'sushi',
            'suture', 'swagger', 'swept', 'swiftly', 'sword', 'swung', 'syllabus', 'symptoms',
            'syndrome', 'syringe', 'system', 'taboo', 'tacit', 'tadpoles', 'tagged', 'tail',
            'taken', 'talent', 'tamper', 'tanks', 'tapestry', 'tarnished', 'tasked', 'tattoo',
            'taunts', 'tavern', 'tawny', 'taxi', 'teardrop', 'technical', 'tedious', 'teeming',
            'tell', 'template', 'tender', 'tepid', 'tequila', 'terminal', 'testing', 'tether',
            'textbook', 'thaw', 'theatrics', 'thirsty', 'thorn', 'threaten', 'thumbs', 'thwart',
            'ticket', 'tidy', 'tiers', 'tiger', 'tilt', 'timber', 'tinted', 'tipsy',
            'tirade', 'tissue', 'titans', 'toaster', 'tobacco', 'today', 'toenail', 'toffee',
            'together', 'toilet', 'token', 'tolerant', 'tomorrow', 'tonic', 'toolbox', 'topic',
            'torch', 'tossed', 'total', 'touchy', 'towel', 'toxic', 'toyed', 'trash',
            'trendy', 'tribal', 'trolling', 'truth', 'trying', 'tsunami', 'tubes', 'tucks',
            'tudor', 'tuesday', 'tufts', 'tugs', 'tuition', 'tulips', 'tumbling', 'tunnel',
            'turnip', 'tusks', 'tutor', 'tuxedo', 'twang', 'tweezers', 'twice', 'twofold',
            'tycoon', 'typist', 'tyrant', 'ugly', 'ulcers', 'ultimate', 'umbrella', 'umpire',
            'unafraid', 'unbending', 'uncle', 'under', 'uneven', 'unfit', 'ungainly', 'unhappy',
            'union', 'unjustly', 'unknown', 'unlikely', 'unmask', 'unnoticed', 'unopened', 'unplugs',
            'unquoted', 'unrest', 'unsafe', 'until', 'unusual', 'unveil', 'unwind', 'unzip',
            'upbeat', 'upcoming', 'update', 'upgrade', 'uphill', 'upkeep', 'upload', 'upon',
            'upper', 'upright', 'upstairs', 'uptight', 'upwards', 'urban', 'urchins', 'urgent',
            'usage', 'useful', 'usher', 'using', 'usual', 'utensils', 'utility', 'utmost',
            'utopia', 'uttered', 'vacation', 'vague', 'vain', 'value', 'vampire', 'vane',
            'vapidly', 'vary', 'vastness', 'vats', 'vaults', 'vector', 'veered', 'vegan',
            'vehicle', 'vein', 'velvet', 'venomous', 'verification', 'vessel', 'veteran', 'vexed',
            'vials', 'vibrate', 'victim', 'video', 'viewpoint', 'vigilant', 'viking', 'village',
            'vinegar', 'violin', 'vipers', 'virtual', 'visited', 'vitals', 'vivid', 'vixen',
            'vocal', 'vogue', 'voice', 'volcano', 'vortex', 'voted', 'voucher', 'vowels',
            'voyage', 'vulture', 'wade', 'waffle', 'wagtail', 'waist', 'waking', 'wallets',
            'wanted', 'warped', 'washing', 'water', 'waveform', 'waxing', 'wayside', 'weavers',
            'website', 'wedge', 'weekday', 'weird', 'welders', 'went', 'wept', 'were',
            'western', 'wetsuit', 'whale', 'when', 'whipped', 'whole', 'wickets', 'width',
            'wield', 'wife', 'wiggle', 'wildly', 'winter', 'wipeout', 'wiring', 'wise',
            'withdrawn', 'wives', 'wizard', 'wobbly', 'woes', 'woken', 'wolf', 'womanly',
            'wonders', 'woozy', 'worry', 'wounded', 'woven', 'wrap', 'wrist', 'wrong',
            'yacht', 'yahoo', 'yanks', 'yard', 'yawning', 'yearbook', 'yellow', 'yesterday',
            'yeti', 'yields', 'yodel', 'yoga', 'younger', 'yoyo', 'zapped', 'zeal',
            'zebra', 'zero', 'zesty', 'zigzags', 'zinger', 'zippers', 'zodiac', 'zombie',
            'zones', 'zoom'
        ]
    },
    spanish: {
        prefixLength: 4,
        words: [
            'ábaco', 'abdomen', 'abeja', 'abierto', 'abogado', 'abono', 'aborto', 'abrazo',
            'abrir', 'abuelo', 'abuso', 'acabar', 'academia', 'acceso', 'acción', 'aceite',
            'acelga', 'acento', 'aceptar', 'ácido', 'aclarar', 'acné', 'acoger', 'acoso',
            'activo', 'acto', 'actriz', 'actuar', 'acudir', 'acuerdo', 'acusar', 'adicto',
            'admitir', 'adoptar', 'adorno', 'aduana', 'adulto', 'aéreo', 'afectar', 'afición',
            'afinar', 'afirmar', 'ágil', 'agitar', 'agonía', 'agosto', 'agotar', 'agregar',
            'agrio', 'agua', 'agudo', 'águila', 'aguja', 'ahogo', 'ahorro', 'aire',
            'aislar', 'ajedrez', 'ajeno', 'ajuste', 'alacrán', 'alambre', 'alarma', 'alba',
            'álbum', 'alcalde', 'aldea', 'alegre', 'alejar', 'alerta', 'aleta', 'alfiler',
            'alga', 'algodón', 'aliado', 'aliento', 'alivio', 'alma', 'almeja', 'almíbar',
            'altar', 'alteza', 'altivo', 'alto', 'altura', 'alumno', 'alzar', 'amable',
            'amante', 'amapola', 'amargo', 'amasar', 'ámbar', 'ámbito', 'ameno', 'amigo',
            'amistad', 'amor', 'amparo', 'amplio', 'ancho', 'anciano', 'ancla', 'andar',
            'andén', 'anemia', 'ángulo', 'anillo', 'ánimo', 'anís', 'anotar', 'antena',
            'antiguo', 'antojo', 'anual', 'anular', 'anuncio', 'añadir', 'añejo', 'año',
            'apagar', 'aparato', 'apetito', 'apio', 'aplicar', 'apodo', 'aporte', 'apoyo',
            'aprender', 'aprobar', 'apuesta', 'apuro', 'arado', 'araña', 'arar', 'árbitro',
            'árbol', 'arbusto', 'archivo', 'arco', 'arder', 'ardilla', 'arduo', 'área',
            'árido', 'aries', 'armonía', 'arnés', 'aroma', 'arpa', 'arpón', 'arreglo',
            'arroz', 'arruga', 'arte', 'artista', 'asa', 'asado', 'asalto', 'ascenso',
            'asegurar', 'aseo', 'asesor', 'asiento', 'asilo', 'asistir', 'asno', 'asombro',
            'áspero', 'astilla', 'astro', 'astuto', 'asumir', 'asunto', 'atajo', 'ataque',
            'atar', 'atento', 'ateo', 'ático', 'atleta', 'átomo', 'atraer', 'atroz',
            'atún', 'audaz', 'audio', 'auge', 'aula', 'aumento', 'ausente', 'autor',
            'aval', 'avance', 'avaro', 'ave', 'avellana', 'avena', 'avestruz', 'avión',
            'aviso', 'ayer', 'ayuda', 'ayuno', 'azafrán', 'azar', 'azote', 'azúcar',
            'azufre', 'azul', 'baba', 'babor', 'bache', 'bahía', 'baile', 'bajar',
            'balanza', 'balcón', 'balde', 'bambú', 'banco', 'banda', 'baño', 'barba',
            'barco', 'barniz', 'barro', 'báscula', 'bastón', 'basura', 'batalla', 'batería',
            'batir', 'batuta', 'baúl', 'bazar', 'bebé', 'bebida', 'bello', 'besar',
            'beso', 'bestia', 'bicho', 'bien', 'bingo', 'blanco', 'bloque', 'blusa',
            'boa', 'bobina', 'bobo', 'boca', 'bocina', 'boda', 'bodega', 'boina',
            'bola', 'bolero', 'bolsa', 'bomba', 'bondad', 'bonito', 'bono', 'bonsái',
            'borde', 'borrar', 'bosque', 'bote', 'botín', 'bóveda', 'bozal', 'bravo',
            'brazo', 'brecha', 'breve', 'brillo', 'brinco', 'brisa', 'broca', 'broma',
            'bronce', 'brote', 'bruja', 'brusco', 'bruto', 'buceo', 'bucle', 'bueno',
            'buey', 'bufanda', 'bufón', 'búho', 'buitre', 'bulto', 'burbuja', 'burla',
            'burro', 'buscar', 'butaca', 'buzón', 'caballo', 'cabeza', 'cabina', 'cabra',
            'cacao', 'cadáver', 'cadena', 'caer', 'café', 'caída', 'caimán', 'caja',
            'cajón', 'cal', 'calamar', 'calcio', 'caldo', 'calidad', 'calle', 'calma',
            'calor', 'calvo', 'cama', 'cambio', 'camello', 'camino', 'campo', 'cáncer',
            'candil', 'canela', 'canguro', 'canica', 'canto', 'caña', 'cañón', 'caoba',
            'caos', 'capaz', 'capitán', 'capote', 'captar', 'capucha', 'cara', 'carbón',
            'cárcel', 'careta', 'carga', 'cariño', 'carne', 'carpeta', 'carro', 'carta',
            'casa', 'casco', 'casero', 'caspa', 'castor', 'catorce', 'catre', 'caudal',
            'causa', 'cazo', 'cebolla', 'ceder', 'cedro', 'celda', 'célebre', 'celoso',
            'célula', 'cemento', 'ceniza', 'centro', 'cerca', 'cerdo', 'cereza', 'cero',
            'cerrar', 'certeza', 'césped', 'cetro', 'chacal', 'chaleco', 'champú', 'chancla',
            'chapa', 'charla', 'chico', 'chiste', 'chivo', 'choque', 'choza', 'chuleta',
            'chupar', 'ciclón', 'ciego', 'cielo', 'cien', 'cierto', 'cifra', 'cigarro',
            'cima', 'cinco', 'cine', 'cinta', 'ciprés', 'circo', 'ciruela', 'cisne',
            'cita', 'ciudad', 'clamor', 'clan', 'claro', 'clase', 'clave', 'cliente',
            'clima', 'clínica', 'cobre', 'cocción', 'cochino', 'cocina', 'coco', 'código',
            'codo', 'cofre', 'coger', 'cohete', 'cojín', 'cojo', 'cola', 'colcha',
            'colegio', 'colgar', 'colina', 'collar', 'colmo', 'columna', 'combate', 'comer',
            'comida', 'cómodo', 'compra', 'conde', 'conejo', 'conga', 'conocer', 'consejo',
            'contar', 'copa', 'copia', 'corazón', 'corbata', 'corcho', 'cordón', 'corona',
            'correr', 'coser', 'cosmos', 'costa', 'cráneo', 'cráter', 'crear', 'crecer',
            'creído', 'crema', 'cría', 'crimen', 'cripta', 'crisis', 'cromo', 'crónica',
            'croqueta', 'crudo', 'cruz', 'cuadro', 'cuarto', 'cuatro', 'cubo', 'cubrir',
            'cuchara', 'cuello', 'cuento', 'cuerda', 'cuesta', 'cueva', 'cuidar', 'culebra',
            'culpa', 'culto', 'cumbre', 'cumplir', 'cuna', 'cuneta', 'cuota', 'cupón',
            'cúpula', 'curar', 'curioso', 'curso', 'curva', 'cutis', 'dama', 'danza',
            'dar', 'dardo', 'dátil', 'deber', 'débil', 'década', 'decir', 'dedo',
            'defensa', 'definir', 'dejar', 'delfín', 'delgado', 'delito', 'demora', 'denso',
            'dental', 'deporte', 'derecho', 'derrota', 'desayuno', 'deseo', 'desfile', 'desnudo',
            'destino', 'desvío', 'detalle', 'detener', 'deuda', 'día', 'diablo', 'diadema',
            'diamante', 'diana', 'diario', 'dibujo', 'dictar', 'diente', 'dieta', 'diez',
            'difícil', 'digno', 'dilema', 'diluir', 'dinero', 'directo', 'dirigir', 'disco',
            'diseño', 'disfraz', 'diva', 'divino', 'doble', 'doce', 'dolor', 'domingo',
            'don', 'donar', 'dorado', 'dormir', 'dorso', 'dos', 'dosis', 'dragón',
            'droga', 'ducha', 'duda', 'duelo', 'dueño', 'dulce', 'dúo', 'duque',
            'durar', 'dureza', 'duro', 'ébano', 'ebrio', 'echar', 'eco', 'ecuador',
            'edad', 'edición', 'edificio', 'editor', 'educar', 'efecto', 'eficaz', 'eje',
            'ejemplo', 'elefante', 'elegir', 'elemento', 'elevar', 'elipse', 'élite', 'elixir',
            'elogio', 'eludir', 'embudo', 'emitir', 'emoción', 'empate', 'empeño', 'empleo',
            'empresa', 'enano', 'encargo', 'enchufe', 'encía', 'enemigo', 'enero', 'enfado',
            'enfermo', 'engaño', 'enigma', 'enlace', 'enorme', 'enredo', 'ensayo', 'enseñar',
            'entero', 'entrar', 'envase', 'envío', 'época', 'equipo', 'erizo', 'escala',
            'escena', 'escolar', 'escribir', 'escudo', 'esencia', 'esfera', 'esfuerzo', 'espada',
            'espejo', 'espía', 'esposa', 'espuma', 'esquí', 'estar', 'este', 'estilo',
            'estufa', 'etapa', 'eterno', 'ética', 'etnia', 'evadir', 'evaluar', 'evento',
            'evitar', 'exacto', 'examen', 'exceso', 'excusa', 'exento', 'exigir', 'exilio',
            'existir', 'éxito', 'experto', 'explicar', 'exponer', 'extremo', 'fábrica', 'fábula',
            'fachada', 'fácil', 'factor', 'faena', 'faja', 'falda', 'fallo', 'falso',
            'faltar', 'fama', 'familia', 'famoso', 'faraón', 'farmacia', 'farol', 'farsa',
            'fase', 'fatiga', 'fauna', 'favor', 'fax', 'febrero', 'fecha', 'feliz',
            'feo', 'feria', 'feroz', 'fértil', 'fervor', 'festín', 'fiable', 'fianza',
            'fiar', 'fibra', 'ficción', 'ficha', 'fideo', 'fiebre', 'fiel', 'fiera',
            'fiesta', 'figura', 'fijar', 'fijo', 'fila', 'filete', 'filial', 'filtro',
            'fin', 'finca', 'fingir', 'finito', 'firma', 'flaco', 'flauta', 'flecha',
            'flor', 'flota', 'fluir', 'flujo', 'flúor', 'fobia', 'foca', 'fogata',
            'fogón', 'folio', 'folleto', 'fondo', 'forma', 'forro', 'fortuna', 'forzar',
            'fosa', 'foto', 'fracaso', 'frágil', 'franja', 'frase', 'fraude', 'freír',
            'freno', 'fresa', 'frío', 'frito', 'fruta', 'fuego', 'fuente', 'fuerza',
            'fuga', 'fumar', 'función', 'funda', 'furgón', 'furia', 'fusil', 'fútbol',
            'futuro', 'gacela', 'gafas', 'gaita', 'gajo', 'gala', 'galería', 'gallo',
            'gamba', 'ganar', 'gancho', 'ganga', 'ganso', 'garaje', 'garza', 'gasolina',
            'gastar', 'gato', 'gavilán', 'gemelo', 'gemir', 'gen', 'género', 'genio',
            'gente', 'geranio', 'gerente', 'germen', 'gesto', 'gigante', 'gimnasio', 'girar',
            'giro', 'glaciar', 'globo', 'gloria', 'gol', 'golfo', 'goloso', 'golpe',
            'goma', 'gordo', 'gorila', 'gorra', 'gota', 'goteo', 'gozar', 'grada',
            'gráfico', 'grano', 'grasa', 'gratis', 'grave', 'grieta', 'grillo', 'gripe',
            'gris', 'grito', 'grosor', 'grúa', 'grueso', 'grumo', 'grupo', 'guante',
            'guapo', 'guardia', 'guerra', 'guía', 'guiño', 'guion', 'guiso', 'guitarra',
            'gusano', 'gustar', 'haber', 'hábil', 'hablar', 'hacer', 'hacha', 'hada',
            'hallar', 'hamaca', 'harina', 'haz', 'hazaña', 'hebilla', 'hebra', 'hecho',
            'helado', 'helio', 'hembra', 'herir', 'hermano', 'héroe', 'hervir', 'hielo',
            'hierro', 'hígado', 'higiene', 'hijo', 'himno', 'historia', 'hocico', 'hogar',
            'hoguera', 'hoja', 'hombre', 'hongo', 'honor', 'honra', 'hora', 'hormiga',
            'horno', 'hostil', 'hoyo', 'hueco', 'huelga', 'huerta', 'hueso', 'huevo',
            'huida', 'huir', 'humano', 'húmedo', 'humilde', 'humo', 'hundir', 'huracán',
            'hurto', 'icono', 'ideal', 'idioma', 'ídolo', 'iglesia', 'iglú', 'igual',
            'ilegal', 'ilusión', 'imagen', 'imán', 'imitar', 'impar', 'imperio', 'imponer',
            'impulso', 'incapaz', 'índice', 'inerte', 'infiel', 'informe', 'ingenio', 'inicio',
            'inmenso', 'inmune', 'innato', 'insecto', 'instante', 'interés', 'íntimo', 'intuir',
            'inútil', 'invierno', 'ira', 'iris', 'ironía', 'isla', 'islote', 'jabalí',
            'jabón', 'jamón', 'jarabe', 'jardín', 'jarra', 'jaula', 'jazmín', 'jefe',
            'jeringa', 'jinete', 'jornada', 'joroba', 'joven', 'joya', 'juerga', 'jueves',
            'juez', 'jugador', 'jugo', 'juguete', 'juicio', 'junco', 'jungla', 'junio',
            'juntar', 'júpiter', 'jurar', 'justo', 'juvenil', 'juzgar', 'kilo', 'koala',
            'labio', 'lacio', 'lacra', 'lado', 'ladrón', 'lagarto', 'lágrima', 'laguna',
            'laico', 'lamer', 'lámina', 'lámpara', 'lana', 'lancha', 'langosta', 'lanza',
            'lápiz', 'largo', 'larva', 'lástima', 'lata', 'látex', 'latir', 'laurel',
            'lavar', 'lazo', 'leal', 'lección', 'leche', 'lector', 'leer', 'legión',
            'legumbre', 'lejano', 'lengua', 'lento', 'leña', 'león', 'leopardo', 'lesión',
            'letal', 'letra', 'leve', 'leyenda', 'libertad', 'libro', 'licor', 'líder',
            'lidiar', 'lienzo', 'liga', 'ligero', 'lima', 'límite', 'limón', 'limpio',
            'lince', 'lindo', 'línea', 'lingote', 'lino', 'linterna', 'líquido', 'liso',
            'lista', 'litera', 'litio', 'litro', 'llaga', 'llama', 'llanto', 'llave',
            'llegar', 'llenar', 'llevar', 'llorar', 'llover', 'lluvia', 'lobo', 'loción',
            'loco', 'locura', 'lógica', 'logro', 'lombriz', 'lomo', 'lonja', 'lote',
            'lucha', 'lucir', 'lugar', 'lujo', 'luna', 'lunes', 'lupa', 'lustro',
            'luto', 'luz', 'maceta', 'macho', 'madera', 'madre', 'maduro', 'maestro',
            'mafia', 'magia', 'mago', 'maíz', 'maldad', 'maleta', 'malla', 'malo',
            'mamá', 'mambo', 'mamut', 'manco', 'mando', 'manejar', 'manga', 'maniquí',
            'manjar', 'mano', 'manso', 'manta', 'mañana', 'mapa', 'máquina', 'mar',
            'marco', 'marea', 'marfil', 'margen', 'marido', 'mármol', 'marrón', 'martes',
            'marzo', 'masa', 'máscara', 'masivo', 'matar', 'materia', 'matiz', 'matriz',
            'máximo', 'mayor', 'mazorca', 'mecha', 'medalla', 'medio', 'médula', 'mejilla',
            'mejor', 'melena', 'melón', 'memoria', 'menor', 'mensaje', 'mente', 'menú',
            'mercado', 'merengue', 'mérito', 'mes', 'mesón', 'meta', 'meter', 'método',
            'metro', 'mezcla', 'miedo', 'miel', 'miembro', 'miga', 'mil', 'milagro',
            'militar', 'millón', 'mimo', 'mina', 'minero', 'mínimo', 'minuto', 'miope',
            'mirar', 'misa', 'miseria', 'misil', 'mismo', 'mitad', 'mito', 'mochila',
            'moción', 'moda', 'modelo', 'moho', 'mojar', 'molde', 'moler', 'molino',
            'momento', 'momia', 'monarca', 'moneda', 'monja', 'monto', 'moño', 'morada',
            'morder', 'moreno', 'morir', 'morro', 'morsa', 'mortal', 'mosca', 'mostrar',
            'motivo', 'mover', 'móvil', 'mozo', 'mucho', 'mudar', 'mueble', 'muela',
            'muerte', 'muestra', 'mugre', 'mujer', 'mula', 'muleta', 'multa', 'mundo',
            'muñeca', 'mural', 'muro', 'músculo', 'museo', 'musgo', 'música', 'muslo',
            'nácar', 'nación', 'nadar', 'naipe', 'naranja', 'nariz', 'narrar', 'nasal',
            'natal', 'nativo', 'natural', 'náusea', 'naval', 'nave', 'navidad', 'necio',
            'néctar', 'negar', 'negocio', 'negro', 'neón', 'nervio', 'neto', 'neutro',
            'nevar', 'nevera', 'nicho', 'nido', 'niebla', 'nieto', 'niñez', 'niño',
            'nítido', 'nivel', 'nobleza', 'noche', 'nómina', 'noria', 'norma', 'norte',
            'nota', 'noticia', 'novato', 'novela', 'novio', 'nube', 'nuca', 'núcleo',
            'nudillo', 'nudo', 'nuera', 'nueve', 'nuez', 'nulo', 'número', 'nutria',
            'oasis', 'obeso', 'obispo', 'objeto', 'obra', 'obrero', 'observar', 'obtener',
            'obvio', 'oca', 'ocaso', 'océano', 'ochenta', 'ocho', 'ocio', 'ocre',
            'octavo', 'octubre', 'oculto', 'ocupar', 'ocurrir', 'odiar', 'odio', 'odisea',
            'oeste', 'ofensa', 'oferta', 'oficio', 'ofrecer', 'ogro', 'oído', 'oír',
            'ojo', 'ola', 'oleada', 'olfato', 'olivo', 'olla', 'olmo', 'olor',
            'olvido', 'ombligo', 'onda', 'onza', 'opaco', 'opción', 'ópera', 'opinar',
            'oponer', 'optar', 'óptica', 'opuesto', 'oración', 'orador', 'oral', 'órbita',
            'orca', 'orden', 'oreja', 'órgano', 'orgía', 'orgullo', 'oriente', 'origen',
            'orilla', 'oro', 'orquesta', 'oruga', 'osadía', 'oscuro', 'osezno', 'oso',
            'ostra', 'otoño', 'otro', 'oveja', 'óvulo', 'óxido', 'oxígeno', 'oyente',
            'ozono', 'pacto', 'padre', 'paella', 'página', 'pago', 'país', 'pájaro',
            'palabra', 'palco', 'paleta', 'pálido', 'palma', 'paloma', 'palpar', 'pan',
            'panal', 'pánico', 'pantera', 'pañuelo', 'papá', 'papel', 'papilla', 'paquete',
            'parar', 'parcela', 'pared', 'parir', 'paro', 'párpado', 'parque', 'párrafo',
            'parte', 'pasar', 'paseo', 'pasión', 'paso', 'pasta', 'pata', 'patio',
            'patria', 'pausa', 'pauta', 'pavo', 'payaso', 'peatón', 'pecado', 'pecera',
            'pecho', 'pedal', 'pedir', 'pegar', 'peine', 'pelar', 'peldaño', 'pelea',
            'peligro', 'pellejo', 'pelo', 'peluca', 'pena', 'pensar', 'peñón', 'peón',
            'peor', 'pepino', 'pequeño', 'pera', 'percha', 'perder', 'pereza', 'perfil',
            'perico', 'perla', 'permiso', 'perro', 'persona', 'pesa', 'pesca', 'pésimo',
            'pestaña', 'pétalo', 'petróleo', 'pez', 'pezuña', 'picar', 'pichón', 'pie',
            'piedra', 'pierna', 'pieza', 'pijama', 'pilar', 'piloto', 'pimienta', 'pino',
            'pintor', 'pinza', 'piña', 'piojo', 'pipa', 'pirata', 'pisar', 'piscina',
            'piso', 'pista', 'pitón', 'pizca', 'placa', 'plan', 'plata', 'playa',
            'plaza', 'pleito', 'pleno', 'plomo', 'pluma', 'plural', 'pobre', 'poco',
            'poder', 'podio', 'poema', 'poesía', 'poeta', 'polen', 'policía', 'pollo',
            'polvo', 'pomada', 'pomelo', 'pomo', 'pompa', 'poner', 'porción', 'portal',
            'posada', 'poseer', 'posible', 'poste', 'potencia', 'potro', 'pozo', 'prado',
            'precoz', 'pregunta', 'premio', 'prensa', 'preso', 'previo', 'primo', 'príncipe',
            'prisión', 'privar', 'proa', 'probar', 'proceso', 'producto', 'proeza', 'profesor',
            'programa', 'prole', 'promesa', 'pronto', 'propio', 'próximo', 'prueba', 'público',
            'puchero', 'pudor', 'pueblo', 'puerta', 'puesto', 'pulga', 'pulir', 'pulmón',
            'pulpo', 'pulso', 'puma', 'punto', 'puñal', 'puño', 'pupa', 'pupila',
            'puré', 'quedar', 'queja', 'quemar', 'querer', 'queso', 'quieto', 'química',
            'quince', 'quitar', 'rábano', 'rabia', 'rabo', 'ración', 'radical', 'raíz',
            'rama', 'rampa', 'rancho', 'rango', 'rapaz', 'rápido', 'rapto', 'rasgo',
            'raspa', 'rato', 'rayo', 'raza', 'razón', 'reacción', 'realidad', 'rebaño',
            'rebote', 'recaer', 'receta', 'rechazo', 'recoger', 'recreo', 'recto', 'recurso',
            'red', 'redondo', 'reducir', 'reflejo', 'reforma', 'refrán', 'refugio', 'regalo',
            'regir', 'regla', 'regreso', 'rehén', 'reino', 'reír', 'reja', 'relato',
            'relevo', 'relieve', 'relleno', 'reloj', 'remar', 'remedio', 'remo', 'rencor',
            'rendir', 'renta', 'reparto', 'repetir', 'reposo', 'reptil', 'res', 'rescate',
            'resina', 'respeto', 'resto', 'resumen', 'retiro', 'retorno', 'retrato', 'reunir',
            'revés', 'revista', 'rey', 'rezar', 'rico', 'riego', 'rienda', 'riesgo',
            'rifa', 'rígido', 'rigor', 'rincón', 'riñón', 'río', 'riqueza', 'risa',
            'ritmo', 'rito'
        ]
    },
    portuguese: {
        prefixLength: 3,
        words: [
            'abaular', 'abdominal', 'abeto', 'abissinio', 'abjeto', 'ablucao', 'abnegar', 'abotoar',
            'abrutalhar', 'absurdo', 'abutre', 'acautelar', 'accessorios', 'acetona', 'achocolatado', 'acirrar',
            'acne', 'acovardar', 'acrostico', 'actinomicete', 'acustico', 'adaptavel', 'adeus', 'adivinho',
            'adjunto', 'admoestar', 'adnominal', 'adotivo', 'adquirir', 'adriatico', 'adsorcao', 'adutora',
            'advogar', 'aerossol', 'afazeres', 'afetuoso', 'afixo', 'afluir', 'afortunar', 'afrouxar',
            'aftosa', 'afunilar', 'agentes', 'agito', 'aglutinar', 'aiatola', 'aimore', 'aino',
            'aipo', 'airoso', 'ajeitar', 'ajoelhar', 'ajudante', 'ajuste', 'alazao', 'albumina',
            'alcunha', 'alegria', 'alexandre', 'alforriar', 'alguns', 'alhures', 'alivio', 'almoxarife',
            'alotropico', 'alpiste', 'alquimista', 'alsaciano', 'altura', 'aluviao', 'alvura', 'amazonico',
            'ambulatorio', 'ametodico', 'amizades', 'amniotico', 'amovivel', 'amurada', 'anatomico', 'ancorar',
            'anexo', 'anfora', 'aniversario', 'anjo', 'anotar', 'ansioso', 'anturio', 'anuviar',
            'anverso', 'anzol', 'aonde', 'apaziguar', 'apito', 'aplicavel', 'apoteotico', 'aprimorar',
            'aprumo', 'apto', 'apuros', 'aquoso', 'arauto', 'arbusto', 'arduo', 'aresta',
            'arfar', 'arguto', 'aritmetico', 'arlequim', 'armisticio', 'aromatizar', 'arpoar', 'arquivo',
            'arrumar', 'arsenio', 'arturiano', 'aruaque', 'arvores', 'asbesto', 'ascorbico', 'aspirina',
            'asqueroso', 'assustar', 'astuto', 'atazanar', 'ativo', 'atletismo', 'atmosferico', 'atormentar',
            'atroz', 'aturdir', 'audivel', 'auferir', 'augusto', 'aula', 'aumento', 'aurora',
            'autuar', 'avatar', 'avexar', 'avizinhar', 'avolumar', 'avulso', 'axiomatico', 'azerbaijano',
            'azimute', 'azoto', 'azulejo', 'bacteriologista', 'badulaque', 'baforada', 'baixote', 'bajular',
            'balzaquiana', 'bambuzal', 'banzo', 'baoba', 'baqueta', 'barulho', 'bastonete', 'batuta',
            'bauxita', 'bavaro', 'bazuca', 'bcrepuscular', 'beato', 'beduino', 'begonia', 'behaviorista',
            'beisebol', 'belzebu', 'bemol', 'benzido', 'beocio', 'bequer', 'berro', 'besuntar',
            'betume', 'bexiga', 'bezerro', 'biatlon', 'biboca', 'bicuspide', 'bidirecional', 'bienio',
            'bifurcar', 'bigorna', 'bijuteria', 'bimotor', 'binormal', 'bioxido', 'bipolarizacao', 'biquini',
            'birutice', 'bisturi', 'bituca', 'biunivoco', 'bivalve', 'bizarro', 'blasfemo', 'blenorreia',
            'blindar', 'bloqueio', 'blusao', 'boazuda', 'bofete', 'bojudo', 'bolso', 'bombordo',
            'bonzo', 'botina', 'boquiaberto', 'bostoniano', 'botulismo', 'bourbon', 'bovino', 'boximane',
            'bravura', 'brevidade', 'britar', 'broxar', 'bruno', 'bruxuleio', 'bubonico', 'bucolico',
            'buda', 'budista', 'bueiro', 'buffer', 'bugre', 'bujao', 'bumerangue', 'burundines',
            'busto', 'butique', 'buzios', 'caatinga', 'cabuqui', 'cacunda', 'cafuzo', 'cajueiro',
            'camurca', 'canudo', 'caquizeiro', 'carvoeiro', 'casulo', 'catuaba', 'cauterizar', 'cebolinha',
            'cedula', 'ceifeiro', 'celulose', 'cerzir', 'cesto', 'cetro', 'ceus', 'cevar',
            'chavena', 'cheroqui', 'chita', 'chovido', 'chuvoso', 'ciatico', 'cibernetico', 'cicuta',
            'cidreira', 'cientistas', 'cifrar', 'cigarro', 'cilio', 'cimo', 'cinzento', 'cioso',
            'cipriota', 'cirurgico', 'cisto', 'citrico', 'ciumento', 'civismo', 'clavicula', 'clero',
            'clitoris', 'cluster', 'coaxial', 'cobrir', 'cocota', 'codorniz', 'coexistir', 'cogumelo',
            'coito', 'colusao', 'compaixao', 'comutativo', 'contentamento', 'convulsivo', 'coordenativa', 'coquetel',
            'correto', 'corvo', 'costureiro', 'cotovia', 'covil', 'cozinheiro', 'cretino', 'cristo',
            'crivo', 'crotalo', 'cruzes', 'cubo', 'cucuia', 'cueiro', 'cuidar', 'cujo',
            'cultural', 'cunilingua', 'cupula', 'curvo', 'custoso', 'cutucar', 'czarismo', 'dablio',
            'dacota', 'dados', 'daguerreotipo', 'daiquiri', 'daltonismo', 'damista', 'dantesco', 'daquilo',
            'darwinista', 'dasein', 'dativo', 'deao', 'debutantes', 'decurso', 'deduzir', 'defunto',
            'degustar', 'dejeto', 'deltoide', 'demover', 'denunciar', 'deputado', 'deque', 'dervixe',
            'desvirtuar', 'deturpar', 'deuteronomio', 'devoto', 'dextrose', 'dezoito', 'diatribe', 'dicotomico',
            'didatico', 'dietista', 'difuso', 'digressao', 'diluvio', 'diminuto', 'dinheiro', 'dinossauro',
            'dioxido', 'diplomatico', 'dique', 'dirimivel', 'disturbio', 'diurno', 'divulgar', 'dizivel',
            'doar', 'dobro', 'docura', 'dodoi', 'doer', 'dogue', 'doloso', 'domo',
            'donzela', 'doping', 'dorsal', 'dossie', 'dote', 'doutro', 'doze', 'dravidico',
            'dreno', 'driver', 'dropes', 'druso', 'dubnio', 'ducto', 'dueto', 'dulija',
            'dundum', 'duodeno', 'duquesa', 'durou', 'duvidoso', 'duzia', 'ebano', 'ebrio',
            'eburneo', 'echarpe', 'eclusa', 'ecossistema', 'ectoplasma', 'ecumenismo', 'eczema', 'eden',
            'editorial', 'edredom', 'edulcorar', 'efetuar', 'efigie', 'efluvio', 'egiptologo', 'egresso',
            'egua', 'einsteiniano', 'eira', 'eivar', 'eixos', 'ejetar', 'elastomero', 'eldorado',
            'elixir', 'elmo', 'eloquente', 'elucidativo', 'emaranhar', 'embutir', 'emerito', 'emfa',
            'emitir', 'emotivo', 'empuxo', 'emulsao', 'enamorar', 'encurvar', 'enduro', 'enevoar',
            'enfurnar', 'enguico', 'enho', 'enigmista', 'enlutar', 'enormidade', 'enpreendimento', 'enquanto',
            'enriquecer', 'enrugar', 'entusiastico', 'enunciar', 'envolvimento', 'enxuto', 'enzimatico', 'eolico',
            'epiteto', 'epoxi', 'epura', 'equivoco', 'erario', 'erbio', 'ereto', 'erguido',
            'erisipela', 'ermo', 'erotizar', 'erros', 'erupcao', 'ervilha', 'esburacar', 'escutar',
            'esfuziante', 'esguio', 'esloveno', 'esmurrar', 'esoterismo', 'esperanca', 'espirito', 'espurio',
            'essencialmente', 'esturricar', 'esvoacar', 'etario', 'eterno', 'etiquetar', 'etnologo', 'etos',
            'etrusco', 'euclidiano', 'euforico', 'eugenico', 'eunuco', 'europio', 'eustaquio', 'eutanasia',
            'evasivo', 'eventualidade', 'evitavel', 'evoluir', 'exaustor', 'excursionista', 'exercito', 'exfoliado',
            'exito', 'exotico', 'expurgo', 'exsudar', 'extrusora', 'exumar', 'fabuloso', 'facultativo',
            'fado', 'fagulha', 'faixas', 'fajuto', 'faltoso', 'famoso', 'fanzine', 'fapesp',
            'faquir', 'fartura', 'fastio', 'faturista', 'fausto', 'favorito', 'faxineira', 'fazer',
            'fealdade', 'febril', 'fecundo', 'fedorento', 'feerico', 'feixe', 'felicidade', 'felipe',
            'feltro', 'femur', 'fenotipo', 'fervura', 'festivo', 'feto', 'feudo', 'fevereiro',
            'fezinha', 'fiasco', 'fibra', 'ficticio', 'fiduciario', 'fiesp', 'fifa', 'figurino',
            'fijiano', 'filtro', 'finura', 'fiorde', 'fiquei', 'firula', 'fissurar', 'fitoteca',
            'fivela', 'fixo', 'flavio', 'flexor', 'flibusteiro', 'flotilha', 'fluxograma', 'fobos',
            'foco', 'fofura', 'foguista', 'foie', 'foliculo', 'fominha', 'fonte', 'forum',
            'fosso', 'fotossintese', 'foxtrote', 'fraudulento', 'frevo', 'frivolo', 'frouxo', 'frutose',
            'fuba', 'fucsia', 'fugitivo', 'fuinha', 'fujao', 'fulustreco', 'fumo', 'funileiro',
            'furunculo', 'fustigar', 'futurologo', 'fuxico', 'fuzue', 'gabriel', 'gado', 'gaelico',
            'gafieira', 'gaguejo', 'gaivota', 'gajo', 'galvanoplastico', 'gamo', 'ganso', 'garrucha',
            'gastronomo', 'gatuno', 'gaussiano', 'gaviao', 'gaxeta', 'gazeteiro', 'gear', 'geiser',
            'geminiano', 'generoso', 'genuino', 'geossinclinal', 'gerundio', 'gestual', 'getulista', 'gibi',
            'gigolo', 'gilete', 'ginseng', 'giroscopio', 'glaucio', 'glacial', 'gleba', 'glifo',
            'glote', 'glutonia', 'gnostico', 'goela', 'gogo', 'goitaca', 'golpista', 'gomo',
            'gonzo', 'gorro', 'gostou', 'goticula', 'gourmet', 'governo', 'gozo', 'graxo',
            'grevista', 'grito', 'grotesco', 'gruta', 'guaxinim', 'gude', 'gueto', 'guizo',
            'guloso', 'gume', 'guru', 'gustativo', 'gustavo', 'gutural', 'habitue', 'haitiano',
            'halterofilista', 'hamburguer', 'hanseniase', 'happening', 'harpista', 'hastear', 'haveres', 'hebreu',
            'hectometro', 'hedonista', 'hegira', 'helena', 'helminto', 'hemorroidas', 'henrique', 'heptassilabo',
            'hertziano', 'hesitar', 'heterossexual', 'heuristico', 'hexagono', 'hiato', 'hibrido', 'hidrostatico',
            'hieroglifo', 'hifenizar', 'higienizar', 'hilario', 'himen', 'hino', 'hippie', 'hirsuto',
            'historiografia', 'hitlerista', 'hodometro', 'hoje', 'holograma', 'homus', 'honroso', 'hoquei',
            'horto', 'hostilizar', 'hotentote', 'huguenote', 'humilde', 'huno', 'hurra', 'hutu',
            'iaia', 'ialorixa', 'iambico', 'iansa', 'iaque', 'iara', 'iatista', 'iberico',
            'ibis', 'icar', 'iceberg', 'icosagono', 'idade', 'ideologo', 'idiotice', 'idoso',
            'iemenita', 'iene', 'igarape', 'iglu', 'ignorar', 'igreja', 'iguaria', 'iidiche',
            'ilativo', 'iletrado', 'ilharga', 'ilimitado', 'ilogismo', 'ilustrissimo', 'imaturo', 'imbuzeiro',
            'imerso', 'imitavel', 'imovel', 'imputar', 'imutavel', 'inaveriguavel', 'incutir', 'induzir',
            'inextricavel', 'infusao', 'ingua', 'inhame', 'iniquo', 'injusto', 'inning', 'inoxidavel',
            'inquisitorial', 'insustentavel', 'intumescimento', 'inutilizavel', 'invulneravel', 'inzoneiro', 'iodo', 'iogurte',
            'ioio', 'ionosfera', 'ioruba', 'iota', 'ipsilon', 'irascivel', 'iris', 'irlandes',
            'irmaos', 'iroques', 'irrupcao', 'isca', 'isento', 'islandes', 'isotopo', 'isqueiro',
            'israelita', 'isso', 'isto', 'iterbio', 'itinerario', 'itrio', 'iuane', 'iugoslavo',
            'jabuticabeira', 'jacutinga', 'jade', 'jagunco', 'jainista', 'jaleco', 'jambo', 'jantarada',
            'japones', 'jaqueta', 'jarro', 'jasmim', 'jato', 'jaula', 'javel', 'jazz',
            'jegue', 'jeitoso', 'jejum', 'jenipapo', 'jeova', 'jequitiba', 'jersei', 'jesus',
            'jetom', 'jiboia', 'jihad', 'jilo', 'jingle', 'jipe', 'jocoso', 'joelho',
            'joguete', 'joio', 'jojoba', 'jorro', 'jota', 'joule', 'joviano', 'jubiloso',
            'judoca', 'jugular', 'juizo', 'jujuba', 'juliano', 'jumento', 'junto', 'jururu',
            'justo', 'juta', 'juventude', 'labutar', 'laguna', 'laico', 'lajota', 'lanterninha',
            'lapso', 'laquear', 'lastro', 'lauto', 'lavrar', 'laxativo', 'lazer', 'leasing',
            'lebre', 'lecionar', 'ledo', 'leguminoso', 'leitura', 'lele', 'lemure', 'lento',
            'leonardo', 'leopardo', 'lepton', 'leque', 'leste', 'letreiro', 'leucocito', 'levitico',
            'lexicologo', 'lhama', 'lhufas', 'liame', 'licoroso', 'lidocaina', 'liliputiano', 'limusine',
            'linotipo', 'lipoproteina', 'liquidos', 'lirismo', 'lisura', 'liturgico', 'livros', 'lixo',
            'lobulo', 'locutor', 'lodo', 'logro', 'lojista', 'lombriga', 'lontra', 'loop',
            'loquaz', 'lorota', 'losango', 'lotus', 'louvor', 'luar', 'lubrificavel', 'lucros',
            'lugubre', 'luis', 'luminoso', 'luneta', 'lustroso', 'luto', 'luvas', 'luxuriante',
            'luzeiro', 'maduro', 'maestro', 'mafioso', 'magro', 'maiuscula', 'majoritario', 'malvisto',
            'mamute', 'manutencao', 'mapoteca', 'maquinista', 'marzipa', 'masturbar', 'matuto', 'mausoleu',
            'mavioso', 'maxixe', 'mazurca', 'meandro', 'mecha', 'medusa', 'mefistofelico', 'megera',
            'meirinho', 'melro', 'memorizar', 'menu', 'mequetrefe', 'mertiolate', 'mestria', 'metroviario',
            'mexilhao', 'mezanino', 'miau', 'microssegundo', 'midia', 'migratorio', 'mimosa', 'minuto',
            'miosotis', 'mirtilo', 'misturar', 'mitzvah', 'miudos', 'mixuruca', 'mnemonico', 'moagem',
            'mobilizar', 'modulo', 'moer', 'mofo', 'mogno', 'moita', 'molusco', 'monumento',
            'moqueca', 'morubixaba', 'mostruario', 'motriz', 'mouse', 'movivel', 'mozarela', 'muarra',
            'muculmano', 'mudo', 'mugir', 'muitos', 'mumunha', 'munir', 'muon', 'muquira',
            'murros', 'musselina', 'nacoes', 'nado', 'naftalina', 'nago', 'naipe', 'naja',
            'nalgum', 'namoro', 'nanquim', 'napolitano', 'naquilo', 'nascimento', 'nautilo', 'navios',
            'nazista', 'nebuloso', 'nectarina', 'nefrologo', 'negus', 'nelore', 'nenufar', 'nepotismo',
            'nervura', 'neste', 'netuno', 'neutron', 'nevoeiro', 'newtoniano', 'nexo', 'nhenhenhem',
            'nhoque', 'nigeriano', 'niilista', 'ninho', 'niobio', 'niponico', 'niquelar', 'nirvana',
            'nisto', 'nitroglicerina', 'nivoso', 'nobreza', 'nocivo', 'noel', 'nogueira', 'noivo',
            'nojo', 'nominativo', 'nonuplo', 'noruegues', 'nostalgico', 'noturno', 'nouveau', 'nuanca',
            'nublar', 'nucleotideo', 'nudista', 'nulo', 'numismatico', 'nunquinha', 'nupcias', 'nutritivo',
            'nuvens', 'oasis', 'obcecar', 'obeso', 'obituario', 'objetos', 'oblongo', 'obnoxio',
            'obrigatorio', 'obstruir', 'obtuso', 'obus', 'obvio', 'ocaso', 'occipital', 'oceanografo',
            'ocioso', 'oclusivo', 'ocorrer', 'ocre', 'octogono', 'odalisca', 'odisseia', 'odorifico',
            'oersted', 'oeste', 'ofertar', 'ofidio', 'oftalmologo', 'ogiva', 'ogum', 'oigale',
            'oitavo', 'oitocentos', 'ojeriza', 'olaria', 'oleoso', 'olfato', 'olhos', 'oliveira',
            'olmo', 'olor', 'olvidavel', 'ombudsman', 'omeleteira', 'omitir', 'omoplata', 'onanismo',
            'ondular', 'oneroso', 'onomatopeico', 'ontologico', 'onus', 'onze', 'opalescente', 'opcional',
            'operistico', 'opio', 'oposto', 'oprobrio', 'optometrista', 'opusculo', 'oratorio', 'orbital',
            'orcar', 'orfao', 'orixa', 'orla', 'ornitologo', 'orquidea', 'ortorrombico', 'orvalho',
            'osculo', 'osmotico', 'ossudo', 'ostrogodo', 'otario', 'otite', 'ouro', 'ousar',
            'outubro', 'ouvir', 'ovario', 'overnight', 'oviparo', 'ovni', 'ovoviviparo', 'ovulo',
            'oxala', 'oxente', 'oxiuro', 'oxossi', 'ozonizar', 'paciente', 'pactuar', 'padronizar',
            'paete', 'pagodeiro', 'paixao', 'pajem', 'paludismo', 'pampas', 'panturrilha', 'papudo',
            'paquistanes', 'pastoso', 'patua', 'paulo', 'pauzinhos', 'pavoroso', 'paxa', 'pazes',
            'peao', 'pecuniario', 'pedunculo', 'pegaso', 'peixinho', 'pejorativo', 'pelvis', 'penuria',
            'pequno', 'petunia', 'pezada', 'piauiense', 'pictorico', 'pierro', 'pigmeu', 'pijama',
            'pilulas', 'pimpolho', 'pintura', 'piorar', 'pipocar', 'piqueteiro', 'pirulito', 'pistoleiro',
            'pituitaria', 'pivotar', 'pixote', 'pizzaria', 'plistoceno', 'plotar', 'pluviometrico', 'pneumonico',
            'poco', 'podridao', 'poetisa', 'pogrom', 'pois', 'polvorosa', 'pomposo', 'ponderado',
            'pontudo', 'populoso', 'poquer', 'porvir', 'posudo', 'potro', 'pouso', 'povoar',
            'prazo', 'prezar', 'privilegios', 'proximo', 'prussiano', 'pseudopode', 'psoriase', 'pterossauros',
            'ptialina', 'ptolemaico', 'pudor', 'pueril', 'pufe', 'pugilista', 'puir', 'pujante',
            'pulverizar', 'pumba', 'punk', 'purulento', 'pustula', 'putsch', 'puxe', 'quatrocentos',
            'quetzal', 'quixotesco', 'quotizavel', 'rabujice', 'racista', 'radonio', 'rafia', 'ragu',
            'rajado', 'ralo', 'rampeiro', 'ranzinza', 'raptor', 'raquitismo', 'raro', 'rasurar',
            'ratoeira', 'ravioli', 'razoavel', 'reavivar', 'rebuscar', 'recusavel', 'reduzivel', 'reexposicao',
            'refutavel', 'regurgitar', 'reivindicavel', 'rejuvenescimento', 'relva', 'remuneravel', 'renunciar', 'reorientar',
            'repuxo', 'requisito', 'resumo', 'returno', 'reutilizar', 'revolvido', 'rezonear', 'riacho',
            'ribossomo', 'ricota', 'ridiculo', 'rifle', 'rigoroso', 'rijo', 'rimel', 'rins',
            'rios', 'riqueza', 'riquixa', 'rissole', 'ritualistico', 'rivalizar', 'rixa', 'robusto',
            'rococo', 'rodoviario', 'roer', 'rogo', 'rojao', 'rolo', 'rompimento', 'ronronar',
            'roqueiro', 'rorqual', 'rosto', 'rotundo', 'rouxinol', 'roxo', 'royal', 'ruas',
            'rucula', 'rudimentos', 'ruela', 'rufo', 'rugoso', 'ruivo', 'rule', 'rumoroso',
            'runico', 'ruptura', 'rural', 'rustico', 'rutilar', 'saariano', 'sabujo', 'sacudir',
            'sadomasoquista', 'safra', 'sagui', 'sais', 'samurai', 'santuario', 'sapo', 'saquear',
            'sartriano', 'saturno', 'saude', 'sauva', 'saveiro', 'saxofonista', 'sazonal', 'scherzo',
            'script', 'seara', 'seborreia', 'secura', 'seduzir', 'sefardim', 'seguro', 'seja',
            'selvas', 'sempre', 'senzala', 'sepultura', 'sequoia', 'sestercio', 'setuplo', 'seus',
            'seviciar', 'sezonismo', 'shalom', 'siames', 'sibilante', 'sicrano', 'sidra', 'sifilitico',
            'signos', 'silvo', 'simultaneo', 'sinusite', 'sionista', 'sirio', 'sisudo', 'situar',
            'sivan', 'slide', 'slogan', 'soar', 'sobrio', 'socratico', 'sodomizar', 'soerguer',
            'software', 'sogro', 'soja', 'solver', 'somente', 'sonso', 'sopro', 'soquete',
            'sorveteiro', 'sossego', 'soturno', 'sousafone', 'sovinice', 'sozinho', 'suavizar', 'subverter',
            'sucursal', 'sudoriparo', 'sufragio', 'sugestoes', 'suite', 'sujo', 'sultao', 'sumula',
            'suntuoso', 'suor', 'supurar', 'suruba', 'susto', 'suturar', 'suvenir', 'tabuleta',
            'taco', 'tadjique', 'tafeta', 'tagarelice', 'taitiano', 'talvez', 'tampouco', 'tanzaniano',
            'taoista', 'tapume', 'taquion', 'tarugo', 'tascar', 'tatuar', 'tautologico', 'tavola',
            'taxionomista', 'tchecoslovaco', 'teatrologo', 'tectonismo', 'tedioso', 'teflon', 'tegumento', 'teixo',
            'telurio', 'temporas', 'tenue', 'teosofico', 'tepido', 'tequila', 'terrorista', 'testosterona',
            'tetrico', 'teutonico', 'teve', 'texugo', 'tiara', 'tibia', 'tiete', 'tifoide',
            'tigresa', 'tijolo', 'tilintar', 'timpano', 'tintureiro', 'tiquete', 'tiroteio', 'tisico',
            'titulos', 'tive', 'toar', 'toboga', 'tofu', 'togoles', 'toicinho', 'tolueno',
            'tomografo', 'tontura', 'toponimo', 'toquio', 'torvelinho', 'tostar', 'toto', 'touro',
            'toxina', 'trazer', 'trezentos', 'trivialidade', 'trovoar', 'truta', 'tuaregue', 'tubular',
            'tucano', 'tudo', 'tufo', 'tuiste', 'tulipa', 'tumultuoso', 'tunisino', 'tupiniquim',
            'turvo', 'tutu', 'ucraniano', 'udenista', 'ufanista', 'ufologo', 'ugaritico', 'uiste',
            'uivo', 'ulceroso', 'ulema', 'ultravioleta', 'umbilical', 'umero', 'umido', 'umlaut',
            'unanimidade', 'unesco', 'ungulado', 'unheiro', 'univoco', 'untuoso', 'urano', 'urbano',
            'urdir', 'uretra', 'urgente', 'urinol', 'urna', 'urologo', 'urro', 'ursulina',
            'urtiga', 'urupe', 'usavel', 'usbeque', 'usei', 'usineiro', 'usurpar', 'utero',
            'utilizar', 'utopico', 'uvular', 'uxoricidio', 'vacuo', 'vadio', 'vaguear', 'vaivem',
            'valvula', 'vampiro', 'vantajoso', 'vaporoso', 'vaquinha', 'varziano', 'vasto', 'vaticinio',
            'vaudeville', 'vazio', 'veado', 'vedico', 'veemente', 'vegetativo', 'veio', 'veja',
            'veludo', 'venusiano', 'verdade', 'verve', 'vestuario', 'vetusto', 'vexatorio', 'vezes',
            'viavel', 'vibratorio', 'victor', 'vicunha', 'vidros', 'vietnamita', 'vigoroso', 'vilipendiar',
            'vime', 'vintem', 'violoncelo', 'viquingue', 'virus', 'visualizar', 'vituperio', 'viuvo',
            'vivo', 'vizir', 'voar', 'vociferar', 'vodu', 'vogar', 'voile', 'volver',
            'vomito', 'vontade', 'vortice', 'vosso', 'voto', 'vovozinha', 'voyeuse', 'vozes',
            'vulva', 'vupt', 'western', 'xadrez', 'xale', 'xampu', 'xango', 'xarope',
            'xaual', 'xavante', 'xaxim', 'xenonio', 'xepa', 'xerox', 'xicara', 'xifopago',
            'xiita', 'xilogravura', 'xinxim', 'xistoso', 'xixi', 'xodo', 'xogum', 'xucro',
            'zabumba', 'zagueiro', 'zambiano', 'zanzar', 'zarpar', 'zebu', 'zefiro', 'zeloso',
            'zenite', 'zumbi'
        ]
    },
    japanese: {
        prefixLength: 4,
        words: [
            'あいこくしん', 'あいさつ', 'あいだ', 'あおぞら', 'あかちゃん', 'あきる', 'あけがた', 'あける',
            'あこがれる', 'あさい', 'あさひ', 'あしあと', 'あじわう', 'あずかる', 'あずき', 'あそぶ',
            'あたえる', 'あたためる', 'あたりまえ', 'あたる', 'あつい', 'あつかう', 'あっしゅく', 'あつまり',
            'あつめる', 'あてな', 'あてはまる', 'あひる', 'あぶら', 'あぶる', 'あふれる', 'あまい',
            'あまど', 'あまやかす', 'あまり', 'あみもの', 'あめりか', 'あやまる', 'あゆむ', 'あらいぐま',
            'あらし', 'あらすじ', 'あらためる', 'あらゆる', 'あらわす', 'ありがとう', 'あわせる', 'あわてる',
            'あんい', 'あんがい', 'あんこ', 'あんぜん', 'あんてい', 'あんない', 'あんまり', 'いいだす',
            'いおん', 'いがい', 'いがく', 'いきおい', 'いきなり', 'いきもの', 'いきる', 'いくじ',
            'いくぶん', 'いけばな', 'いけん', 'いこう', 'いこく', 'いこつ', 'いさましい', 'いさん',
            'いしき', 'いじゅう', 'いじょう', 'いじわる', 'いずみ', 'いずれ', 'いせい', 'いせえび',
            'いせかい', 'いせき', 'いぜん', 'いそうろう', 'いそがしい', 'いだい', 'いだく', 'いたずら',
            'いたみ', 'いたりあ', 'いちおう', 'いちじ', 'いちど', 'いちば', 'いちぶ', 'いちりゅう',
            'いつか', 'いっしゅん', 'いっせい', 'いっそう', 'いったん', 'いっち', 'いってい', 'いっぽう',
            'いてざ', 'いてん', 'いどう', 'いとこ', 'いない', 'いなか', 'いねむり', 'いのち',
            'いのる', 'いはつ', 'いばる', 'いはん', 'いびき', 'いひん', 'いふく', 'いへん',
            'いほう', 'いみん', 'いもうと', 'いもたれ', 'いもり', 'いやがる', 'いやす', 'いよかん',
            'いよく', 'いらい', 'いらすと', 'いりぐち', 'いりょう', 'いれい', 'いれもの', 'いれる',
            'いろえんぴつ', 'いわい', 'いわう', 'いわかん', 'いわば', 'いわゆる', 'いんげんまめ', 'いんさつ',
            'いんしょう', 'いんよう', 'うえき', 'うえる', 'うおざ', 'うがい', 'うかぶ', 'うかべる',
            'うきわ', 'うくらいな', 'うくれれ', 'うけたまわる', 'うけつけ', 'うけとる', 'うけもつ', 'うける',
            'うごかす', 'うごく', 'うこん', 'うさぎ', 'うしなう', 'うしろがみ', 'うすい', 'うすぎ',
            'うすぐらい', 'うすめる', 'うせつ', 'うちあわせ', 'うちがわ', 'うちき', 'うちゅう', 'うっかり',
            'うつくしい', 'うったえる', 'うつる', 'うどん', 'うなぎ', 'うなじ', 'うなずく', 'うなる',
            'うねる', 'うのう', 'うぶげ', 'うぶごえ', 'うまれる', 'うめる', 'うもう', 'うやまう',
            'うよく', 'うらがえす', 'うらぐち', 'うらない', 'うりあげ', 'うりきれ', 'うるさい', 'うれしい',
            'うれゆき', 'うれる', 'うろこ', 'うわき', 'うわさ', 'うんこう', 'うんちん', 'うんてん',
            'うんどう', 'えいえん', 'えいが', 'えいきょう', 'えいご', 'えいせい', 'えいぶん', 'えいよう',
            'えいわ', 'えおり', 'えがお', 'えがく', 'えきたい', 'えくせる', 'えしゃく', 'えすて',
            'えつらん', 'えのぐ', 'えほうまき', 'えほん', 'えまき', 'えもじ', 'えもの', 'えらい',
            'えらぶ', 'えりあ', 'えんえん', 'えんかい', 'えんぎ', 'えんげき', 'えんしゅう', 'えんぜつ',
            'えんそく', 'えんちょう', 'えんとつ', 'おいかける', 'おいこす', 'おいしい', 'おいつく', 'おうえん',
            'おうさま', 'おうじ', 'おうせつ', 'おうたい', 'おうふく', 'おうべい', 'おうよう', 'おえる',
            'おおい', 'おおう', 'おおどおり', 'おおや', 'おおよそ', 'おかえり', 'おかず', 'おがむ',
            'おかわり', 'おぎなう', 'おきる', 'おくさま', 'おくじょう', 'おくりがな', 'おくる', 'おくれる',
            'おこす', 'おこなう', 'おこる', 'おさえる', 'おさない', 'おさめる', 'おしいれ', 'おしえる',
            'おじぎ', 'おじさん', 'おしゃれ', 'おそらく', 'おそわる', 'おたがい', 'おたく', 'おだやか',
            'おちつく', 'おっと', 'おつり', 'おでかけ', 'おとしもの', 'おとなしい', 'おどり', 'おどろかす',
            'おばさん', 'おまいり', 'おめでとう', 'おもいで', 'おもう', 'おもたい', 'おもちゃ', 'おやつ',
            'おやゆび', 'およぼす', 'おらんだ', 'おろす', 'おんがく', 'おんけい', 'おんしゃ', 'おんせん',
            'おんだん', 'おんちゅう', 'おんどけい', 'かあつ', 'かいが', 'がいき', 'がいけん', 'がいこう',
            'かいさつ', 'かいしゃ', 'かいすいよく', 'かいぜん', 'かいぞうど', 'かいつう', 'かいてん', 'かいとう',
            'かいふく', 'がいへき', 'かいほう', 'かいよう', 'がいらい', 'かいわ', 'かえる', 'かおり',
            'かかえる', 'かがく', 'かがし', 'かがみ', 'かくご', 'かくとく', 'かざる', 'がぞう',
            'かたい', 'かたち', 'がちょう', 'がっきゅう', 'がっこう', 'がっさん', 'がっしょう', 'かなざわし',
            'かのう', 'がはく', 'かぶか', 'かほう', 'かほご', 'かまう', 'かまぼこ', 'かめれおん',
            'かゆい', 'かようび', 'からい', 'かるい', 'かろう', 'かわく', 'かわら', 'がんか',
            'かんけい', 'かんこう', 'かんしゃ', 'かんそう', 'かんたん', 'かんち', 'がんばる', 'きあい',
            'きあつ', 'きいろ', 'ぎいん', 'きうい', 'きうん', 'きえる', 'きおう', 'きおく',
            'きおち', 'きおん', 'きかい', 'きかく', 'きかんしゃ', 'ききて', 'きくばり', 'きくらげ',
            'きけんせい', 'きこう', 'きこえる', 'きこく', 'きさい', 'きさく', 'きさま', 'きさらぎ',
            'ぎじかがく', 'ぎしき', 'ぎじたいけん', 'ぎじにってい', 'ぎじゅつしゃ', 'きすう', 'きせい', 'きせき',
            'きせつ', 'きそう', 'きぞく', 'きぞん', 'きたえる', 'きちょう', 'きつえん', 'ぎっちり',
            'きつつき', 'きつね', 'きてい', 'きどう', 'きどく', 'きない', 'きなが', 'きなこ',
            'きぬごし', 'きねん', 'きのう', 'きのした', 'きはく', 'きびしい', 'きひん', 'きふく',
            'きぶん', 'きぼう', 'きほん', 'きまる', 'きみつ', 'きむずかしい', 'きめる', 'きもだめし',
            'きもち', 'きもの', 'きゃく', 'きやく', 'ぎゅうにく', 'きよう', 'きょうりゅう', 'きらい',
            'きらく', 'きりん', 'きれい', 'きれつ', 'きろく', 'ぎろん', 'きわめる', 'ぎんいろ',
            'きんかくじ', 'きんじょ', 'きんようび', 'ぐあい', 'くいず', 'くうかん', 'くうき', 'くうぐん',
            'くうこう', 'ぐうせい', 'くうそう', 'ぐうたら', 'くうふく', 'くうぼ', 'くかん', 'くきょう',
            'くげん', 'ぐこう', 'くさい', 'くさき', 'くさばな', 'くさる', 'くしゃみ', 'くしょう',
            'くすのき', 'くすりゆび', 'くせげ', 'くせん', 'ぐたいてき', 'くださる', 'くたびれる', 'くちこみ',
            'くちさき', 'くつした', 'ぐっすり', 'くつろぐ', 'くとうてん', 'くどく', 'くなん', 'くねくね',
            'くのう', 'くふう', 'くみあわせ', 'くみたてる', 'くめる', 'くやくしょ', 'くらす', 'くらべる',
            'くるま', 'くれる', 'くろう', 'くわしい', 'ぐんかん', 'ぐんしょく', 'ぐんたい', 'ぐんて',
            'けあな', 'けいかく', 'けいけん', 'けいこ', 'けいさつ', 'げいじゅつ', 'けいたい', 'げいのうじん',
            'けいれき', 'けいろ', 'けおとす', 'けおりもの', 'げきか', 'げきげん', 'げきだん', 'げきちん',
            'げきとつ', 'げきは', 'げきやく', 'げこう', 'げこくじょう', 'げざい', 'けさき', 'げざん',
            'けしき', 'けしごむ', 'けしょう', 'げすと', 'けたば', 'けちゃっぷ', 'けちらす', 'けつあつ',
            'けつい', 'けつえき', 'けっこん', 'けつじょ', 'けっせき', 'けってい', 'けつまつ', 'げつようび',
            'げつれい', 'けつろん', 'げどく', 'けとばす', 'けとる', 'けなげ', 'けなす', 'けなみ',
            'けぬき', 'げねつ', 'けねん', 'けはい', 'げひん', 'けぶかい', 'げぼく', 'けまり',
            'けみかる', 'けむし', 'けむり', 'けもの', 'けらい', 'けろけろ', 'けわしい', 'けんい',
            'けんえつ', 'けんお', 'けんか', 'げんき', 'けんげん', 'けんこう', 'けんさく', 'けんしゅう',
            'けんすう', 'げんそう', 'けんちく', 'けんてい', 'けんとう', 'けんない', 'けんにん', 'げんぶつ',
            'けんま', 'けんみん', 'けんめい', 'けんらん', 'けんり', 'こあくま', 'こいぬ', 'こいびと',
            'ごうい', 'こうえん', 'こうおん', 'こうかん', 'ごうきゅう', 'ごうけい', 'こうこう', 'こうさい',
            'こうじ', 'こうすい', 'ごうせい', 'こうそく', 'こうたい', 'こうちゃ', 'こうつう', 'こうてい',
            'こうどう', 'こうない', 'こうはい', 'ごうほう', 'ごうまん', 'こうもく', 'こうりつ', 'こえる',
            'こおり', 'ごかい', 'ごがつ', 'ごかん', 'こくご', 'こくさい', 'こくとう', 'こくない',
            'こくはく', 'こぐま', 'こけい', 'こける', 'ここのか', 'こころ', 'こさめ', 'こしつ',
            'こすう', 'こせい', 'こせき', 'こぜん', 'こそだて', 'こたい', 'こたえる', 'こたつ',
            'こちょう', 'こっか', 'こつこつ', 'こつばん', 'こつぶ', 'こてい', 'こてん', 'ことがら',
            'ことし', 'ことば', 'ことり', 'こなごな', 'こねこね', 'このまま', 'このみ', 'このよ',
            'ごはん', 'こひつじ', 'こふう', 'こふん', 'こぼれる', 'ごまあぶら', 'こまかい', 'ごますり',
            'こまつな', 'こまる', 'こむぎこ', 'こもじ', 'こもち', 'こもの', 'こもん', 'こやく',
            'こやま', 'こゆう', 'こゆび', 'こよい', 'こよう', 'こりる', 'これくしょん', 'ころっけ',
            'こわもて', 'こわれる', 'こんいん', 'こんかい', 'こんき', 'こんしゅう', 'こんすい', 'こんだて',
            'こんとん', 'こんなん', 'こんびに', 'こんぽん', 'こんまけ', 'こんや', 'こんれい', 'こんわく',
            'ざいえき', 'さいかい', 'さいきん', 'ざいげん', 'ざいこ', 'さいしょ', 'さいせい', 'ざいたく',
            'ざいちゅう', 'さいてき', 'ざいりょう', 'さうな', 'さかいし', 'さがす', 'さかな', 'さかみち',
            'さがる', 'さぎょう', 'さくし', 'さくひん', 'さくら', 'さこく', 'さこつ', 'さずかる',
            'ざせき', 'さたん', 'さつえい', 'ざつおん', 'ざっか', 'ざつがく', 'さっきょく', 'ざっし',
            'さつじん', 'ざっそう', 'さつたば', 'さつまいも', 'さてい', 'さといも', 'さとう', 'さとおや',
            'さとし', 'さとる', 'さのう', 'さばく', 'さびしい', 'さべつ', 'さほう', 'さほど',
            'さます', 'さみしい', 'さみだれ', 'さむけ', 'さめる', 'さやえんどう', 'さゆう', 'さよう',
            'さよく', 'さらだ', 'ざるそば', 'さわやか', 'さわる', 'さんいん', 'さんか', 'さんきゃく',
            'さんこう', 'さんさい', 'ざんしょ', 'さんすう', 'さんせい', 'さんそ', 'さんち', 'さんま',
            'さんみ', 'さんらん', 'しあい', 'しあげ', 'しあさって', 'しあわせ', 'しいく', 'しいん',
            'しうち', 'しえい', 'しおけ', 'しかい', 'しかく', 'じかん', 'しごと', 'しすう',
            'じだい', 'したうけ', 'したぎ', 'したて', 'したみ', 'しちょう', 'しちりん', 'しっかり',
            'しつじ', 'しつもん', 'してい', 'してき', 'してつ', 'じてん', 'じどう', 'しなぎれ',
            'しなもの', 'しなん', 'しねま', 'しねん', 'しのぐ', 'しのぶ', 'しはい', 'しばかり',
            'しはつ', 'しはらい', 'しはん', 'しひょう', 'しふく', 'じぶん', 'しへい', 'しほう',
            'しほん', 'しまう', 'しまる', 'しみん', 'しむける', 'じむしょ', 'しめい', 'しめる',
            'しもん', 'しゃいん', 'しゃうん', 'しゃおん', 'じゃがいも', 'しやくしょ', 'しゃくほう', 'しゃけん',
            'しゃこ', 'しゃざい', 'しゃしん', 'しゃせん', 'しゃそう', 'しゃたい', 'しゃちょう', 'しゃっきん',
            'じゃま', 'しゃりん', 'しゃれい', 'じゆう', 'じゅうしょ', 'しゅくはく', 'じゅしん', 'しゅっせき',
            'しゅみ', 'しゅらば', 'じゅんばん', 'しょうかい', 'しょくたく', 'しょっけん', 'しょどう', 'しょもつ',
            'しらせる', 'しらべる', 'しんか', 'しんこう', 'じんじゃ', 'しんせいじ', 'しんちく', 'しんりん',
            'すあげ', 'すあし', 'すあな', 'ずあん', 'すいえい', 'すいか', 'すいとう', 'ずいぶん',
            'すいようび', 'すうがく', 'すうじつ', 'すうせん', 'すおどり', 'すきま', 'すくう', 'すくない',
            'すける', 'すごい', 'すこし', 'ずさん', 'すずしい', 'すすむ', 'すすめる', 'すっかり',
            'ずっしり', 'ずっと', 'すてき', 'すてる', 'すねる', 'すのこ', 'すはだ', 'すばらしい',
            'ずひょう', 'ずぶぬれ', 'すぶり', 'すふれ', 'すべて', 'すべる', 'ずほう', 'すぼん',
            'すまい', 'すめし', 'すもう', 'すやき', 'すらすら', 'するめ', 'すれちがう', 'すろっと',
            'すわる', 'すんぜん', 'すんぽう', 'せあぶら', 'せいかつ', 'せいげん', 'せいじ', 'せいよう',
            'せおう', 'せかいかん', 'せきにん', 'せきむ', 'せきゆ', 'せきらんうん', 'せけん', 'せこう',
            'せすじ', 'せたい', 'せたけ', 'せっかく', 'せっきゃく', 'ぜっく', 'せっけん', 'せっこつ',
            'せっさたくま', 'せつぞく', 'せつだん', 'せつでん', 'せっぱん', 'せつび', 'せつぶん', 'せつめい',
            'せつりつ', 'せなか', 'せのび', 'せはば', 'せびろ', 'せぼね', 'せまい', 'せまる',
            'せめる', 'せもたれ', 'せりふ', 'ぜんあく', 'せんい', 'せんえい', 'せんか', 'せんきょ',
            'せんく', 'せんげん', 'ぜんご', 'せんさい', 'せんしゅ', 'せんすい', 'せんせい', 'せんぞ',
            'せんたく', 'せんちょう', 'せんてい', 'せんとう', 'せんぬき', 'せんねん', 'せんぱい', 'ぜんぶ',
            'ぜんぽう', 'せんむ', 'せんめんじょ', 'せんもん', 'せんやく', 'せんゆう', 'せんよう', 'ぜんら',
            'ぜんりゃく', 'せんれい', 'せんろ', 'そあく', 'そいとげる', 'そいね', 'そうがんきょう', 'そうき',
            'そうご', 'そうしん', 'そうだん', 'そうなん', 'そうび', 'そうめん', 'そうり', 'そえもの',
            'そえん', 'そがい', 'そげき', 'そこう', 'そこそこ', 'そざい', 'そしな', 'そせい',
            'そせん', 'そそぐ', 'そだてる', 'そつう', 'そつえん', 'そっかん', 'そつぎょう', 'そっけつ',
            'そっこう', 'そっせん', 'そっと', 'そとがわ', 'そとづら', 'そなえる', 'そなた', 'そふぼ',
            'そぼく', 'そぼろ', 'そまつ', 'そまる', 'そむく', 'そむりえ', 'そめる', 'そもそも',
            'そよかぜ', 'そらまめ', 'そろう', 'そんかい', 'そんけい', 'そんざい', 'そんしつ', 'そんぞく',
            'そんちょう', 'ぞんび', 'ぞんぶん', 'そんみん', 'たあい', 'たいいん', 'たいうん', 'たいえき',
            'たいおう', 'だいがく', 'たいき', 'たいぐう', 'たいけん', 'たいこ', 'たいざい', 'だいじょうぶ',
            'だいすき', 'たいせつ', 'たいそう', 'だいたい', 'たいちょう', 'たいてい', 'だいどころ', 'たいない',
            'たいねつ', 'たいのう', 'たいはん', 'だいひょう', 'たいふう', 'たいへん', 'たいほ', 'たいまつばな',
            'たいみんぐ', 'たいむ', 'たいめん', 'たいやき', 'たいよう', 'たいら', 'たいりょく', 'たいる',
            'たいわん', 'たうえ', 'たえる', 'たおす', 'たおる', 'たおれる', 'たかい', 'たかね',
            'たきび', 'たくさん', 'たこく', 'たこやき', 'たさい', 'たしざん', 'だじゃれ', 'たすける',
            'たずさわる', 'たそがれ', 'たたかう', 'たたく', 'ただしい', 'たたみ', 'たちばな', 'だっかい',
            'だっきゃく', 'だっこ', 'だっしゅつ', 'だったい', 'たてる', 'たとえる', 'たなばた', 'たにん',
            'たぬき', 'たのしみ', 'たはつ', 'たぶん', 'たべる', 'たぼう', 'たまご', 'たまる',
            'だむる', 'ためいき', 'ためす', 'ためる', 'たもつ', 'たやすい', 'たよる', 'たらす',
            'たりきほんがん', 'たりょう', 'たりる', 'たると', 'たれる', 'たれんと', 'たろっと', 'たわむれる',
            'だんあつ', 'たんい', 'たんおん', 'たんか', 'たんき', 'たんけん', 'たんご', 'たんさん',
            'たんじょうび', 'だんせい', 'たんそく', 'たんたい', 'だんち', 'たんてい', 'たんとう', 'だんな',
            'たんにん', 'だんねつ', 'たんのう', 'たんぴん', 'だんぼう', 'たんまつ', 'たんめい', 'だんれつ',
            'だんろ', 'だんわ', 'ちあい', 'ちあん', 'ちいき', 'ちいさい', 'ちえん', 'ちかい',
            'ちから', 'ちきゅう', 'ちきん', 'ちけいず', 'ちけん', 'ちこく', 'ちさい', 'ちしき',
            'ちしりょう', 'ちせい', 'ちそう', 'ちたい', 'ちたん', 'ちちおや', 'ちつじょ', 'ちてき',
            'ちてん', 'ちぬき', 'ちぬり', 'ちのう', 'ちひょう', 'ちへいせん', 'ちほう', 'ちまた',
            'ちみつ', 'ちみどろ', 'ちめいど', 'ちゃんこなべ', 'ちゅうい', 'ちゆりょく', 'ちょうし', 'ちょさくけん',
            'ちらし', 'ちらみ', 'ちりがみ', 'ちりょう', 'ちるど', 'ちわわ', 'ちんたい', 'ちんもく',
            'ついか', 'ついたち', 'つうか', 'つうじょう', 'つうはん', 'つうわ', 'つかう', 'つかれる',
            'つくね', 'つくる', 'つけね', 'つける', 'つごう', 'つたえる', 'つづく', 'つつじ',
            'つつむ', 'つとめる', 'つながる', 'つなみ', 'つねづね', 'つのる', 'つぶす', 'つまらない',
            'つまる', 'つみき', 'つめたい', 'つもり', 'つもる', 'つよい', 'つるぼ', 'つるみく',
            'つわもの', 'つわり', 'てあし', 'てあて', 'てあみ', 'ていおん', 'ていか', 'ていき',
            'ていけい', 'ていこく', 'ていさつ', 'ていし', 'ていせい', 'ていたい', 'ていど', 'ていねい',
            'ていひょう', 'ていへん', 'ていぼう', 'てうち', 'ておくれ', 'てきとう', 'てくび', 'でこぼこ',
            'てさぎょう', 'てさげ', 'てすり', 'てそう', 'てちがい', 'てちょう', 'てつがく', 'てつづき',
            'でっぱ', 'てつぼう', 'てつや', 'でぬかえ', 'てぬき', 'てぬぐい', 'てのひら', 'てはい',
            'てぶくろ', 'てふだ', 'てほどき', 'てほん', 'てまえ', 'てまきずし', 'てみじか', 'てみやげ',
            'てらす', 'てれび', 'てわけ', 'てわたし', 'でんあつ', 'てんいん', 'てんかい', 'てんき',
            'てんぐ', 'てんけん', 'てんごく', 'てんさい', 'てんし', 'てんすう', 'でんち', 'てんてき',
            'てんとう', 'てんない', 'てんぷら', 'てんぼうだい', 'てんめつ', 'てんらんかい', 'でんりょく', 'でんわ',
            'どあい', 'といれ', 'どうかん', 'とうきゅう', 'どうぐ', 'とうし', 'とうむぎ', 'とおい',
            'とおか', 'とおく', 'とおす', 'とおる', 'とかい', 'とかす', 'ときおり', 'ときどき',
            'とくい', 'とくしゅう', 'とくてん', 'とくに', 'とくべつ', 'とけい', 'とける', 'とこや',
            'とさか', 'としょかん', 'とそう', 'とたん', 'とちゅう', 'とっきゅう', 'とっくん', 'とつぜん',
            'とつにゅう', 'とどける', 'ととのえる', 'とない', 'となえる', 'となり', 'とのさま', 'とばす',
            'どぶがわ', 'とほう', 'とまる', 'とめる', 'ともだち', 'ともる', 'どようび', 'とらえる',
            'とんかつ', 'どんぶり', 'ないかく', 'ないこう', 'ないしょ', 'ないす', 'ないせん', 'ないそう',
            'なおす', 'ながい', 'なくす', 'なげる', 'なこうど', 'なさけ', 'なたでここ', 'なっとう',
            'なつやすみ', 'ななおし', 'なにごと', 'なにもの', 'なにわ', 'なのか', 'なふだ', 'なまいき',
            'なまえ', 'なまみ', 'なみだ', 'なめらか', 'なめる', 'なやむ', 'ならう', 'ならび',
            'ならぶ', 'なれる', 'なわとび', 'なわばり', 'にあう', 'にいがた', 'にうけ', 'におい',
            'にかい', 'にがて', 'にきび', 'にくしみ', 'にくまん', 'にげる', 'にさんかたんそ', 'にしき',
            'にせもの', 'にちじょう', 'にちようび', 'にっか', 'にっき', 'にっけい', 'にっこう', 'にっさん',
            'にっしょく', 'にっすう', 'にっせき', 'にってい', 'になう', 'にほん', 'にまめ', 'にもつ',
            'にやり', 'にゅういん', 'にりんしゃ', 'にわとり', 'にんい', 'にんか', 'にんき', 'にんげん',
            'にんしき', 'にんずう', 'にんそう', 'にんたい', 'にんち', 'にんてい', 'にんにく', 'にんぷ',
            'にんまり', 'にんむ', 'にんめい', 'にんよう', 'ぬいくぎ', 'ぬかす', 'ぬぐいとる', 'ぬぐう',
            'ぬくもり', 'ぬすむ', 'ぬまえび', 'ぬめり', 'ぬらす', 'ぬんちゃく', 'ねあげ', 'ねいき',
            'ねいる', 'ねいろ', 'ねぐせ', 'ねくたい', 'ねくら', 'ねこぜ', 'ねこむ', 'ねさげ',
            'ねすごす', 'ねそべる', 'ねだん', 'ねつい', 'ねっしん', 'ねつぞう', 'ねったいぎょ', 'ねぶそく',
            'ねふだ', 'ねぼう', 'ねほりはほり', 'ねまき', 'ねまわし', 'ねみみ', 'ねむい', 'ねむたい',
            'ねもと', 'ねらう', 'ねわざ', 'ねんいり', 'ねんおし', 'ねんかん', 'ねんきん', 'ねんぐ',
            'ねんざ', 'ねんし', 'ねんちゃく', 'ねんど', 'ねんぴ', 'ねんぶつ', 'ねんまつ', 'ねんりょう',
            'ねんれい', 'のいず', 'のおづま', 'のがす', 'のきなみ', 'のこぎり', 'のこす', 'のこる',
            'のせる', 'のぞく', 'のぞむ', 'のたまう', 'のちほど', 'のっく', 'のばす', 'のはら',
            'のべる', 'のぼる', 'のみもの', 'のやま', 'のらいぬ', 'のらねこ', 'のりもの', 'のりゆき',
            'のれん', 'のんき', 'ばあい', 'はあく', 'ばあさん', 'ばいか', 'ばいく', 'はいけん',
            'はいご', 'はいしん', 'はいすい', 'はいせん', 'はいそう', 'はいち', 'ばいばい', 'はいれつ',
            'はえる', 'はおる', 'はかい', 'ばかり', 'はかる', 'はくしゅ', 'はけん', 'はこぶ',
            'はさみ', 'はさん', 'はしご', 'ばしょ', 'はしる', 'はせる', 'ぱそこん', 'はそん',
            'はたん', 'はちみつ', 'はつおん', 'はっかく', 'はづき', 'はっきり', 'はっくつ', 'はっけん',
            'はっこう', 'はっさん', 'はっしん', 'はったつ', 'はっちゅう', 'はってん', 'はっぴょう', 'はっぽう',
            'はなす', 'はなび', 'はにかむ', 'はぶらし', 'はみがき', 'はむかう', 'はめつ', 'はやい',
            'はやし', 'はらう', 'はろうぃん', 'はわい', 'はんい', 'はんえい', 'はんおん', 'はんかく',
            'はんきょう', 'ばんぐみ', 'はんこ', 'はんしゃ', 'はんすう', 'はんだん', 'ぱんち', 'ぱんつ',
            'はんてい', 'はんとし', 'はんのう', 'はんぱ', 'はんぶん', 'はんぺん', 'はんぼうき', 'はんめい',
            'はんらん', 'はんろん', 'ひいき', 'ひうん', 'ひえる', 'ひかく', 'ひかり', 'ひかる',
            'ひかん', 'ひくい', 'ひけつ', 'ひこうき', 'ひこく', 'ひさい', 'ひさしぶり', 'ひさん',
            'びじゅつかん', 'ひしょ'
        ]
    }
};

Object.keys(wordSets).forEach((lang) => {
    if (!wordSets[lang].prefixLength || wordSets[lang].prefixLength === 0) {
        return;
    }

    const prefixLength = wordSets[lang].prefixLength;

    wordSets[lang].trunc_words = [];

    wordSets[lang].words.forEach((word: string) => {
        wordSets[lang].trunc_words.push(word.slice(0, prefixLength));
    });
});

/**
 * Mnemonics helper for Wallet Seeds
 */
export class Mnemonics {
    /**
     * Encodes a wallet seed to a set of mnemonic words
     * @param seed The wallet seed
     * @param wordsetName The mnemonic language
     * @returns The mnemonic phrase
     */
    public static encode (seed: string, wordsetName?: string): string {
        return encode(seed, wordsetName);
    }

    /**
     * Decodes a set of mnemonics words to a wallet seed
     * @param words The mnemonic phrase
     * @param wordsetName The mnemonic language
     * @returns The wallet seed
     */
    public static decode (words: string, wordsetName?: string): string {
        return decode(words, wordsetName);
    }

    /**
     * Generates random bits of data
     * @param bits The number of random bits to return
     * @returns The random bits in a hexadecimal representation
     */
    public static random (bits: number): string {
        return random(bits);
    }

    /**
     * Provides the full list of wordsets available with their words
     */
    static get words (): any {
        return wordSets;
    }

    /**
     * Provides the list of mnemonic languages supported
     * @returns The mnemonic languages
     */
    static get languages (): string[] {
        return Object.keys(wordSets);
    }
}

/**
 * @ignore
 */
function getChecksumIndex (words: string[], prefixLength: number): number {
    let trimmerWords = '';

    words.forEach((word) => {
        trimmerWords += word.slice(0, prefixLength);
    });

    const checksum = crc.crc32(trimmerWords);

    const index = checksum % words.length;

    return index;
}

/**
 * @ignore
 */
function encode (str: string, wordsetName?: string): string {
    wordsetName = wordsetName || defaultWordset;
    const wordset = wordSets[wordsetName];
    let out: string[] = [];
    const n = wordset.words.length;
    for (let j = 0; j < str.length; j += 8) {
        str = str.slice(0, j) + swapEndian4byte(str.slice(j, j + 8)) + str.slice(j + 8);
    }
    for (let i = 0; i < str.length; i += 8) {
        const x = parseInt(str.substr(i, 8), 16);
        const w1 = (x % n);
        const w2 = (Math.floor(x / n) + w1) % n;
        const w3 = (Math.floor(Math.floor(x / n) / n) + w2) % n;
        out = out.concat([wordset.words[w1], wordset.words[w2], wordset.words[w3]]);
    }
    if (wordset.prefixLength > 0) {
        out.push(out[getChecksumIndex(out, wordset.prefixLength)]);
    }
    return out.join(' ');
}

/**
 * @ignore
 */
function swapEndian4byte (str: string): string {
    if (str.length !== 8) {
        throw new Error('Invalid input length: ' + str.length);
    }
    return str.slice(6, 8) + str.slice(4, 6) + str.slice(2, 4) + str.slice(0, 2);
}

/**
 * @ignore
 */
function decode (str: string, wordsetName?: string) {
    wordsetName = wordsetName || defaultWordset;
    const wordset = wordSets[wordsetName];
    let out = '';
    const n = wordset.words.length;
    const wlist = str.toLowerCase().split(' ');
    let checksumWord = '';
    if (wlist.length < 12) {
        throw new Error('You have entered too few words, please try again');
    }
    if ((wordset.prefixLength === 0 && (wlist.length % 3 !== 0)) ||
        (wordset.prefixLength > 0 && (wlist.length % 3 === 2))) {
        throw new Error('You\'ve entered too few words, please try again');
    }
    if (wordset.prefixLength > 0 && (wlist.length % 3 === 0)) {
        throw new Error('You seem to be missing the last word in your private key, please try again');
    }
    if (wordset.prefixLength > 0) {
        // Pop checksum from mnemonic
        const tmp = wlist.pop();

        if (tmp) {
            checksumWord = tmp;
        } else {
            throw new Error('Could not remove the prefix from the word set');
        }
    }
    // Decode mnemonic
    for (let i = 0; i < wlist.length; i += 3) {
        let w1;
        let w2;
        let w3;
        if (wordset.prefixLength === 0) {
            w1 = wordset.words.indexOf(wlist[i]);
            w2 = wordset.words.indexOf(wlist[i + 1]);
            w3 = wordset.words.indexOf(wlist[i + 2]);
        } else {
            w1 = wordset.trunc_words.indexOf(wlist[i].slice(0, wordset.prefixLength));
            w2 = wordset.trunc_words.indexOf(wlist[i + 1].slice(0, wordset.prefixLength));
            w3 = wordset.trunc_words.indexOf(wlist[i + 2].slice(0, wordset.prefixLength));
        }
        if (w1 === -1 || w2 === -1 || w3 === -1) {
            throw new Error('invalid word in mnemonic');
        }
        const x = w1 + n * (((n - w1) + w2) % n) + n * n * (((n - w2) + w3) % n);
        if (x % n !== w1) {
            throw new Error('Something went wrong when decoding your private key, please try again');
        }
        out += swapEndian4byte(('0000000' + x.toString(16)).slice(-8));
    }
    // Verify checksum
    if (wordset.prefixLength > 0) {
        const index = getChecksumIndex(wlist, wordset.prefixLength);
        const expectedChecksumWord = wlist[index];
        if (expectedChecksumWord.slice(0, wordset.prefixLength) !== checksumWord.slice(0, wordset.prefixLength)) {
            throw new Error('Your private key could not be verified, please try again');
        }
    }
    return out;
}

/**
 * @ignore
 */
function random (bits: number): string {
    if (bits % 32 !== 0) {
        throw new Error('Something weird went wrong: Invalid number of bits - ' + bits);
    }
    const array = new Uint8Array(bits / 8);

    let i = 0;

    function arrIsZero (): boolean {
        for (let j = 0; j < bits / 8; ++j) {
            if (array[j] !== 0) {
                return false;
            }
        }
        return true;
    }

    do {
        GetRandomValues(array);
        ++i;
    } while (i < 5 && arrIsZero());
    if (arrIsZero()) {
        throw new Error('Something went wrong and we could not securely generate random data for your account');
    }

    let out = '';
    for (let j = 0; j < bits / 8; ++j) {
        out += ('0000000' + array[j].toString(16)).slice(-8);
    }
    return out;
}
